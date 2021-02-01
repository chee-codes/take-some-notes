//? Dependencies
//*=====================================

const { urlencoded, json } = require("express");
const express = require("express");
const path = require("path");
const fs = require("fs");
const notes = require("./db/db.json");
const { parse } = require("path");

//? Express setup
//*================================

const app = express();
const PORT = process.env.PORT || 3000;

//? Middleware
//*===================================

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

/* ---- ROUTES ---- */

//! HTML Routes
//?===================================

app.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "notes.html"));
});

//! API Routes
//?==================================

app.get("/api/notes", (req, res) => {
  // console.log(notes);
  res.json(notes);
});

//* POST Request
//?==========================================

app.post("/api/notes", (req, res) => {
  const newNote = {
    //*Add id using the length of the notes array
    //*and adding 1 so it'll start at 1

    id: notes.length + 1,
    title: req.body.title,
    text: req.body.text,
  };

  //console.log(newNote);
  notes.push(newNote);
  //console.log(notes);

  res.json(notes);
});

//* DELETE Request
//?==========================================
app.delete("/api/notes/:id", (req, res) => {
  const toDelete = req.params.id;

  let found = notes.findIndex((note) => note.id === parseInt(toDelete));
  if (found) {
    res.json(notes.splice(found, 1));
  } else {
    res.json(notes.splice(0, 1));
  }
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

//? Listener
//*==================================
app.listen(PORT, () =>
  console.log("Server listening on http://localhost:" + PORT)
);
