require('dotenv').config();
const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

//Set public folser as root
app.use(express.static('public'))

app.use('/scripts', express.static(`${__dirname}/node_modules/`))
var http = require('http');

app.listen(port, () => {
    console.log("Server running at %d", port);
});