require('dotenv').config();
const path = require('path');
const express = require('express');
//const root = path.join(__dirname, 'src')
const app = express();
const port = process.env.PORT || 5000;

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'src/index.html'));
});
  
// app.get('/about', (req, res) => {
//     res.send('About page. Nice.');
// });

app.listen(port, () => {
    console.log("Server running at %d", port);
});