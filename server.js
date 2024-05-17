const express = require('express');
const path = require('path');
const fs = require('fs');

const db = require('./db/db.json');

const PORT = 3001;

const app = express();

app.use(express.static('public'));
app.use(express.json());

app.use(express.urlencoded({ extended: true }));

//html routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, + '/public/index.html'));
});

app.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/notes.html'));
});

//api routes
app.get('/api/notes', (req, res) => {
  res.json(db);
});

app.post('/api/notes', (req, res) => {
  const newNote = {
    id: req.body.noteId,
    title: req.body.title,
    text: req.body.text
  }
  db.push(newNote);
})


console.log(__dirname);

app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});