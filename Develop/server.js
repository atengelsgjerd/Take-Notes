const express = require('express');
const path = require('path');

const PORT = 3001;

const app = express();

app.use(express.static('public'));
app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

console.log(__dirname);

app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});