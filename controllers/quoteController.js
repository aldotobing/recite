const path = require("path");
const fs = require("fs");
const QuoteModel = require("../models/QuoteModel");

const quotesFilePath = path.resolve("./") + "/content/quotes.json";

const getQuotes = (req, res) => {
  try {
    const quotesFileContent = fs.readFileSync(quotesFilePath);
    const quotes = JSON.parse(quotesFileContent);

    res.send({
      total: quotes.length,
      quotes,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Failed to fetch quotes",
    });
  }
};

const getQuotesFromDb = async (req, res) => {
  try {
    const quotes = await QuoteModel.find();
    res.status(200).send({
      success: true,
      total: quotes.length,
      quotes,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Failed to fetch quotes from database",
    });
  }
};

const getRandomQuote = (req, res) => {
  try {
    const quotesFileContent = fs.readFileSync(quotesFilePath);
    const quotes = JSON.parse(quotesFileContent);
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

    res.status(200).send(randomQuote);
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Failed to fetch random quote",
    });
  }
};

const getRandomQuoteFromDb = async (req, res) => {
  try {
    const quotes = await QuoteModel.find();
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

    res.status(200).send(randomQuote);
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Failed to fetch random quote from database",
    });
  }
};

const createQuote = (req, res) => {
  const { quote, book, author } = req.body;

  if (!quote || !book || !author) {
    return res.status(400).send("Error: All fields are required.");
  }

  const newQuote = {
    id: new Date().getTime().toString(),
    data: {
      quote,
      book,
      author,
      length: quote.length,
      words: quote.split(" ").length,
      createdAt: new Date(),
    },
  };

  try {
    const quotesContent = fs.readFileSync(quotesFilePath);
    const quotes = JSON.parse(quotesContent);
    quotes.push(newQuote);
    fs.writeFileSync(quotesFilePath, JSON.stringify(quotes));

    res.status(201).send({
      status: "success",
      message: "Quote has been added.",
      data: newQuote,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Failed to create quote",
    });
  }
};

const createQuoteInDb = async (req, res) => {
  const { quote, book, author } = req.body;

  if (!quote || !book || !author) {
    return res.status(400).send("Error: All fields are required.");
  }

  try {
    const newQuote = await QuoteModel.create({
      quote,
      book,
      author,
      length: quote.length,
      words: quote.split(" ").length,
    });

    res.status(201).json({
      success: true,
      message: "Quote has been added!",
      data: newQuote,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Failed to create quote in database",
    });
  }
};

const updateQuote = (req, res) => {
  const { id } = req.params;

  try {
    const quotes = JSON.parse(fs.readFileSync(quotesFilePath));
    const updatedQuotes = quotes.map((quote) => {
      if (quote.id === id) {
        return {
          ...quote,
          data: { ...quote.data, ...req.body, updatedAt: new Date() },
        };
      }
      return quote;
    });

    fs.writeFileSync(quotesFilePath, JSON.stringify(updatedQuotes));

    res.send({
      status: "success",
      message: `Quote with ${id} has been successfully updated`,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Failed to update quote",
    });
  }
};

const deleteQuote = (req, res) => {
  const { id } = req.params;

  try {
    const quotes = JSON.parse(fs.readFileSync(quotesFilePath));
    const updatedQuotes = quotes.filter((quote) => id !== quote.id);

    fs.writeFileSync(quotesFilePath, JSON.stringify(updatedQuotes));

    res.send({
      status: "success",
      message: `Quote with ${id} has been successfully deleted.`,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Failed to delete quote",
    });
  }
};

module.exports = {
  getQuotes,
  getQuotesFromDb,
  getRandomQuote,
  getRandomQuoteFromDb,
  createQuote,
  createQuoteInDb,
  updateQuote,
  deleteQuote,
};
