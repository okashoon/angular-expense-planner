const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const http = require('http');

const app = express();

app.use(express.static(path.join(__dirname, 'dist')));
app.get('*', function(req, res) {
    res.send("hello");
})

const port = 3000;

app.set('port', port);

http.createServer(app).listen(port);