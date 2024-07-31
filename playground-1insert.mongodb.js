/* global use, db */
// MongoDB Playground
// To disable this template go to Settings | MongoDB | Use Default Template For Playground.
// Make sure you are connected to enable completions and to be able to run a playground.
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.
// The result of the last command run in a playground is shown on the results panel.
// By default the first 20 documents will be returned with a cursor.
// Use 'console.log()' to print to the debug output.
// For more documentation on playgrounds please refer to
// https://www.mongodb.com/docs/mongodb-vscode/playgrounds/

// Select the database to use.
use("quotes_db");

// Insert a few documents into the sales collection.
db.getCollection("quotes").insertMany([
  {
    id: "10707935400121",
    data: {
      quote: "It was a pleasure to burn.",
      book: "Fahrenheit 451",
      author: "Ray Bradbury",
      length: 27,
      words: 6,
      createdAt: "2024-07-31T12:30:00.000+07:00",
    },
  },
  {
    id: "10707935400122",
    data: {
      quote: "All this happened, more or less.",
      book: "Slaughterhouse-Five",
      author: "Kurt Vonnegut",
      length: 35,
      words: 6,
      createdAt: "2024-07-31T12:31:00.000+07:00",
    },
  },
  {
    id: "10707935400123",
    data: {
      quote: "The past is a foreign country; they do things differently there.",
      book: "The Go-Between",
      author: "L.P. Hartley",
      length: 63,
      words: 11,
      createdAt: "2024-07-31T12:32:00.000+07:00",
    },
  },
  {
    id: "10707935400124",
    data: {
      quote: "Mrs. Dalloway said she would buy the flowers herself.",
      book: "Mrs. Dalloway",
      author: "Virginia Woolf",
      length: 55,
      words: 9,
      createdAt: "2024-07-31T12:33:00.000+07:00",
    },
  },
  {
    id: "10707935400125",
    data: {
      quote: "It was love at first sight.",
      book: "Catch-22",
      author: "Joseph Heller",
      length: 28,
      words: 6,
      createdAt: "2024-07-31T12:34:00.000+07:00",
    },
  },
  {
    id: "10707935400126",
    data: {
      quote: "The sun shone, having no alternative, on the nothing new.",
      book: "Murphy",
      author: "Samuel Beckett",
      length: 59,
      words: 10,
      createdAt: "2024-07-31T12:35:00.000+07:00",
    },
  },
  {
    id: "10707935400127",
    data: {
      quote: "If you want to make God laugh, tell him about your plans.",
      book: "The Hummingbird's Daughter",
      author: "Luis Alberto Urrea",
      length: 60,
      words: 11,
      createdAt: "2024-07-31T12:36:00.000+07:00",
    },
  },
  {
    id: "10707935400128",
    data: {
      quote:
        "The sky above the port was the color of television, tuned to a dead channel.",
      book: "Neuromancer",
      author: "William Gibson",
      length: 81,
      words: 14,
      createdAt: "2024-07-31T12:37:00.000+07:00",
    },
  },
  {
    id: "10707935400129",
    data: {
      quote:
        "As Gregor Samsa awoke one morning from uneasy dreams he found himself transformed in his bed into a gigantic insect.",
      book: "The Metamorphosis",
      author: "Franz Kafka",
      length: 129,
      words: 21,
      createdAt: "2024-07-31T12:38:00.000+07:00",
    },
  },
  {
    id: "10707935400130",
    data: {
      quote: "All children, except one, grow up.",
      book: "Peter Pan",
      author: "J.M. Barrie",
      length: 35,
      words: 6,
      createdAt: "2024-07-31T12:39:00.000+07:00",
    },
  },
]);
