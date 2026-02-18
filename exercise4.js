const express = require("express");
const app = express();
app.use(express.json());

const PORT = 8000;

let authors = [];

app.post("/authors", (req, res) => {
  const newAuthor = {
    id: authors.length + 1,
    ...req.body
  };
  authors.push(newAuthor);
  res.status(201).json(newAuthor);
});

app.get("/authors", (req, res) => {
  res.json(authors);
});

app.get("/authors/:id", (req, res) => {
  const author = authors.find(a => a.id === parseInt(req.params.id));
  if (!author) return res.status(404).json({ error: "Author not found" });
  res.json(author);
});

app.put("/authors/:id", (req, res) => {
  const author = authors.find(a => a.id === parseInt(req.params.id));
  if (!author) return res.status(404).json({ error: "Author not found" });

  Object.assign(author, req.body);
  res.json(author);
});

app.delete("/authors/:id", (req, res) => {
  authors = authors.filter(a => a.id !== parseInt(req.params.id));
  res.json({ message: "Author deleted" });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
