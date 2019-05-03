'use srict';

const http = require('http');
const express = require('express');
const path = require('path');

let server;

exports.startServer = function() {
  const webroot = path.join(__dirname, '../sites/')
  const srcroot = path.join(__dirname, '../../../src/')

  const app = express();
  app.use('/', express.static(webroot));
  app.use('/src', express.static(srcroot));

  server = http.createServer(app);

  server.listen(3000, () => {
    console.log('Express server running at http://localhost:3000');
  });
}



exports.stopServer = function () {
  server && server.close(() => {
    console.log("express server stopping")
  });
}
