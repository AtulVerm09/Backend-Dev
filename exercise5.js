const express = require("express");
const app = express();

const PORT = 8000;

const books = [
  { id: 1, title: "JavaScript Basics" },
  { id: 2, title: "Node Guide" },
  { id: 3, title: "Advanced Java" },
];

app.get("/books/search", (req, res) => {
  const { search } = req.query;

  if (!search) {
    return res.status(400).json({ error: "Search query required" });
  }

  const result = books.filter(book =>
    book.title.toLowerCase().includes(search.toLowerCase())
  );

  res.json(result);
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
