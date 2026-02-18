const express = require("express");
const app = express();

const PORT = 8000;

const books = [
  { id: 1, title: "Book A" },
  { id: 2, title: "Book B" },
  { id: 3, title: "Book C" },
  { id: 4, title: "Book D" },
  { id: 5, title: "Book E" },
];

app.get("/books", (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 2;

  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;

  const paginatedBooks = books.slice(startIndex, endIndex);

  res.json({
    page,
    limit,
    total: books.length,
    data: paginatedBooks
  });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
