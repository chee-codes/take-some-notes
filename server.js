const { urlencoded } = require("express");
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
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

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

// app.get("/api/notes/:id", (req, res) => {
//   let choice = req.params.id;
//   res.json(notes.forEach((note) => choice === parseInt(note)));
// });

app.post("api/notes/new", (req, res) => {
  let newNote = req.body;

  // newNote.routeName = newNote.name.replace(/\s+/g, "").toLowerCase();

  console.log(newNote);

  notes.push(newNote);

  res.json(newNote);
});

//Listener
//==================================
app.listen(PORT, () =>
  console.log("Server listening on http://localhost:" + PORT)
);
