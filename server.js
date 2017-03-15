//jshint esversion:6
const express = require('express');
const app = express();
const router = require('./api/routes/apiRoute');
const logger = require('morgan');
const port = process.env.PORT || 3000;

app.use(logger('dev'));
app.use(express.static(__dirname + '/src'));

app.use('/', router);

app.listen(port, function(){
    console.log('server ready on http://localhost:%s', port);
});