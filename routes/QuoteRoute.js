const express = require("express");
const {
  getQuotes,
  getRandomQuote,
  createQuote,
  deleteQuote,
  updateQuote,
  createQuoteInDb,
  getQuotesFromDb,
  getRandomQuoteFromDb,
} = require("../controllers/quoteController");
const router = express.Router();

router.get("/", (req, res) => {
  res.sendFile("index.html", { root: __dirname });
});

console.log(__dirname);

router.get("/quotes", getQuotes);
router.get("/quotes-from-db", getQuotesFromDb);
router.get("/random/quote", getRandomQuote);
router.get("/random/quote-from-db", getRandomQuoteFromDb);

// Route to serve createQuote.html
router.get("/create-quote", (req, res) => {
  res.sendFile("createQuote.html", { root: __dirname + "/../views" });
});

router.post("/quote", createQuote);
router.post("/quote-in-db", (req, res) => {
  // Check if the request is coming from the HTML form
  if (req.headers["content-type"] === "application/x-www-form-urlencoded") {
    // Redirect to the create-quote page
    res.redirect("/create-quote");
  } else {
    // Call the createQuoteInDb controller function
    createQuoteInDb(req, res);
  }
});

router.put("/quote/:id", updateQuote);
router.delete("/quote/:id", deleteQuote);

module.exports = router;
