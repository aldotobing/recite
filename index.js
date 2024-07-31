const express = require("express");
const dotenv = require("dotenv");
const quoteRoute = require("./routes/QuoteRoute");
const cors = require("cors");
const connectDb = require("./utils/connectDb");

// Initialize Express app
const app = express();
dotenv.config();

// Connect to database
connectDb();

// Middleware
app.use(express.json());
app.use(cors({ origin: "*" }));

// Routes
app.use("/", quoteRoute);

// 404 handler
app.all("*", (req, res) => {
  res.status(404).send("Resource not found");
});

// Define port
const port = process.env.PORT || 3003;

// Start server
app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});
