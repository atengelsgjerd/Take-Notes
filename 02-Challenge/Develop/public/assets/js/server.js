const express = require('express');
const fs = require('fs');
const noteData = require('../../../db/db.json');

const app = express();
const PORT = 3001;

app.use(express.static('public'));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.sendFile(__dirname + './public/index.html');
})

app.listen(PORT, () => {
    console.log(`Listening on PORT: ${PORT}`);
})