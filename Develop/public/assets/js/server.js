const express = require('express');

const PORT = 3001;

const app = express();

app.use(express.static('public'));
app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.sendFile('index.html', {root: './public'});
});

app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});