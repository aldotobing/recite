// Select the database to use.
use("quotes_db");

// Run a find command to view all items in the sales collection.
const allSales = db.getCollection("quotes").find();

// Iterate over the cursor and print each document.
while (allSales.hasNext()) {
  printjson(allSales.next());
}
