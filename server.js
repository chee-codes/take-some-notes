const { urlencoded, json } = require("express");
const express = require("express");
const path = require("path");
const fs = require("fs");
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
  // console.log(notes);
  res.json(notes);
});

// app.get("/api/notes/:id", (req, res) => {
//   let choice = req.params.id;
//   res.json(notes.forEach((note) => choice === parseInt(note)));
// });

app.post("/api/notes", (req, res) => {
  const newNote = {
    id: notes.length + 1,
    title: req.body.title,
    text: req.body.text,
  };

  //console.log(newNote);

  notes.push(newNote);
  //console.log(notes);

  res.json(notes);
});

//Listener
//==================================
app.listen(PORT, () =>
  console.log("Server listening on http://localhost:" + PORT)
);
