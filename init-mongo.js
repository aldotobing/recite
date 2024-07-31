db.createUser({
  user: "books",
  pwd: "booksquote",
  roles: [
    {
      role: "readWrite",
      db: "quotes_db",
    },
  ],
});
