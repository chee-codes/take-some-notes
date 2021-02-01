# take-some-notes

## Description

This application allows users to take and save notes, and also delete them when done. Using Express.js, a connection is made between the client and server via a series of HTTP request (GET, POST, and DELETE).

## Getting Started

1. Clone repository to local directory.
2. Download and install **_Nodejs_**.
3. Open terminal in code editor or via machine.
4. In the terminal, run **_npm install_** to install any dependencies you need.
5. If no dependencies are needed, or you've already installed them. Run **_node server.js_** to start the application.

## Built With

- [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
- [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [Nodejs](https://nodejs.org/)
- [Express]()

## Deployed Link

[Deplyed Link](https://drive.google.com/file/d/11oQaGiiIl86pc63IpOpdMdTJegzi5PIU/view)

[!App Image]()

## Code Snippet

This snippet of code shows the HTML routes for the static pages. And a API route using a GET request to aquire and display any saved notes.

```javascript
/* ---- ROUTES ---- */

//! HTML Routes
//?===================================

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "notes.html"));
});

//! API Routes
//?==================================

app.get("/api/notes", (req, res) => {
  // console.log(notes);
  res.json(notes);
});
```

This snippet of code shows how the saved notes are deleted when the user clicks the delete button.

```javascript
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
```

## Authors

- **Jaja Brown**
  - [Portfolio](https://jbrown827.github.io/portfolio/)
  - [GitHub](https://github.com/jbrown827)
  - [LinkedIn](https://www.linkedin.com/in/jaja-brown-a42261201)
