const express = require('express');
const fs = require('fs');
const cors = require('cors');
const app = express();
const port = 5000;

app.use(cors());

const data = JSON.parse(fs.readFileSync('data/data.json', 'utf8'));

app.get('/data', (req, res) => {
    res.send(JSON.stringify(data));
});


app.listen(port, () => {
    console.log(`Listening on Port: ${port}`);
});