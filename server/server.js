require('dotenv').config();
const express = require('express');
const parser = require('body-parser');
const path = require('path');
const route = require('./routing/router');
require('./database');


const server= express();

server.use(parser.json());
server.use(express.static(path.join(__dirname, '../client/static')));
server.use(parser.urlencoded({extended : true}));
server.use('/api', route)


server.listen(3001, function() {
  console.log('Server listening on port: 3001')
})