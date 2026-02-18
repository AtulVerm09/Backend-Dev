const express = require("express");
const app = express();
app.use(express.json());

const PORT = 8000;

let books = [];

function validateYear(req, res, next) {
  const { year } = req.body;

  if (!year || isNaN(year)) {
    return res.status(400).json({ error: "Year must be a valid number" });
  }

  if (year < 1000 || year > new Date().getFullYear()) {
    return res.status(400).json({ error: "Year out of valid range" });
  }

  next();
}

app.post("/books", validateYear, (req, res) => {
  const newBook = {
    id: books.length + 1,
    ...req.body
  };

  books.push(newBook);
  res.status(201).json(newBook);
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
