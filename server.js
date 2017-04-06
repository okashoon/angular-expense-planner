const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const http = require('http');
const api = require('./server/routes/api');

const app = express();

//parses the req body to json so that i can access it by request.body
app.use(bodyParser.json());
app.use(bodyParser.raw());
app.use(express.static(path.join(__dirname, 'dist')));
app.use('/api', api);

const port = 3000;

app.set('port', port);

app.listen(port, () => console.log('server working on port: ' + port));