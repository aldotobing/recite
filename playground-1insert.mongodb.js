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
    id: "10707935400011",
    data: {
      quote:
        "Kenapa ya, kalau kita udah siap-siap untuk tidur, otak malah jadi penuh ide?",
      book: "",
      author: "🤖",
      length: 79,
      words: 15,
      createdAt: "2024-06-08T18:10:00.000Z",
    },
  },
  {
    id: "10707935400012",
    data: {
      quote:
        "Terkadang, menunda-nunda itu bukan karena malas, tapi karena terlalu capek untuk memikirkan kemungkinan terburuk.",
      book: "",
      author: "🤖",
      length: 116,
      words: 20,
      createdAt: "2024-06-08T18:11:00.000Z",
    },
  },
  {
    id: "10707935400013",
    data: {
      quote:
        "Kamu tahu kamu sudah dewasa saat liburan yang 'menyenangkan' adalah saat tidur sepanjang hari.",
      book: "",
      author: "🤖",
      length: 97,
      words: 16,
      createdAt: "2024-06-08T18:12:00.000Z",
    },
  },
  {
    id: "10707935400014",
    data: {
      quote:
        "Mengapa ya, ketika kita menabung untuk sesuatu yang penting, uang selalu tiba-tiba habis?",
      book: "",
      author: "🤖",
      length: 89,
      words: 15,
      createdAt: "2024-06-08T18:13:00.000Z",
    },
  },
  {
    id: "10707935400015",
    data: {
      quote:
        "Jangan pernah meremehkan kekuatan pelukan. Terutama saat kamu merasa hancur oleh dunia.",
      book: "",
      author: "🤖",
      length: 94,
      words: 15,
      createdAt: "2024-06-08T18:14:00.000Z",
    },
  },
  {
    id: "10707935400016",
    data: {
      quote:
        "Kadang-kadang, menjadi dewasa itu terasa seperti berpura-pura tahu apa yang kamu lakukan.",
      book: "",
      author: "🤖",
      length: 89,
      words: 14,
      createdAt: "2024-06-08T18:15:00.000Z",
    },
  },
  {
    id: "10707935400017",
    data: {
      quote:
        "Kenapa ya, waktu terasa lambat saat kamu menunggu, tapi berlari saat kamu terlambat?",
      book: "",
      author: "🤖",
      length: 84,
      words: 15,
      createdAt: "2024-06-08T18:16:00.000Z",
    },
  },
  {
    id: "10707935400018",
    data: {
      quote:
        "Sebenarnya, kenapa disebut 'liburan' kalau yang ada malah 'lebih ribet dari biasanya'?",
      book: "",
      author: "🤖",
      length: 92,
      words: 14,
      createdAt: "2024-06-08T18:17:00.000Z",
    },
  },
  {
    id: "10707935400019",
    data: {
      quote:
        "Kenapa ya, kadang kamu bisa melupakan sesuatu yang sangat penting, tapi bisa mengingat hal-hal sepele dari masa lalu?",
      book: "",
      author: "🤖",
      length: 122,
      words: 19,
      createdAt: "2024-06-08T18:18:00.000Z",
    },
  },
  {
    id: "10707935400020",
    data: {
      quote:
        "Terkadang, menjadi dewasa bukanlah tentang tahu segalanya, tapi belajar menerima bahwa kita masih banyak yang harus dipelajari.",
      book: "",
      author: "🤖",
      length: 124,
      words: 21,
      createdAt: "2024-06-08T18:19:00.000Z",
    },
  },
]);
