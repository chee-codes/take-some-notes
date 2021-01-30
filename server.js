const { response } = require("express");
const express = require("express");
const path = require("path");
const db = require("./db/db.json");
const app = express();
const PORT = process.env.PORT || 3000;

//Middleware
//===================================
app.use(express.static(path.join(__dirname, "public")));

//Routes
//===================================
//HTML

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "notes.html"));
});

//API

app.get("/api/notes", (req, res) => {
  res.json(db);
});

//Listener
//==================================
app.listen(PORT, () =>
  console.log("Server listening on http://localhost:" + PORT)
);
