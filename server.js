/**
 * Created by abalasubramanian on 3/16/15.
 */
var express = require('express');
var app = express();
var path = require('path');

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(60000);
console.log("60000 is the magic port!");