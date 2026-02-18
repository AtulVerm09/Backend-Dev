const express = require("express");
const app = express();

const PORT = 8000;

const books = [
  { id: 1, title: "Book A", author: "John", year: 2020 },
  { id: 2, title: "Book B", author: "Jane", year: 2021 },
  { id: 3, title: "Book C", author: "John", year: 2022 },
];

app.get("/books", (req, res) => {
  const { author, year } = req.query;

  let filteredBooks = books;

  if (author) {
    filteredBooks = filteredBooks.filter(
      book => book.author.toLowerCase() === author.toLowerCase()
    );
  }

  if (year) {
    filteredBooks = filteredBooks.filter(
      book => book.year === parseInt(year)
    );
  }

  res.json(filteredBooks);
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
