'use strict';

// REQUIRE ====================================================================
var express = require('express');

// SETTUP =====================================================================
var app = express();
var port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/app'));

// SERVER INIT================================================================
app.listen(port, function() {
  console.log('\n==================================\n' +
              '= Server listening on port: ' + port + ' =' +
              '\n==================================\n');
});
