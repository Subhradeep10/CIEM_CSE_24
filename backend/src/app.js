const express = require('express');
const path = require('path');
const app = express();
require('./db/conn.js');
const port = process.env.PORT || 3000;


const static_path = path.join(__dirname, "../src/public");

// console.log(path.join(__dirname, "../src/public"))

app.use(express.static(static_path));

app.get('/', (req, res) => {
    console.log('Hello World!');
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});