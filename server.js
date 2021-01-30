const express = require("express");
const path = require("path");
const notes = require("./db/db.json");

//Express setup
//================================
const app = express();
const PORT = process.env.PORT || 3000;

//Middleware
//===================================
app.use(express.static(path.join(__dirname, "public")));

//HTML Routes
//===================================

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "notes.html"));
});

//API Routes
//==================================

app.get("/api/notes", (req, res) => {
  res.json(notes);
});

app.get("/api/notes/:id", (req, res) => {
  let choice = req.params.id;
  res.json(notes.forEach((note) => choice === parseInt(note)));
});

//Listener
//==================================
app.listen(PORT, () =>
  console.log("Server listening on http://localhost:" + PORT)
);
