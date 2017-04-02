//jshint esversion:6
const express = require('express');
const app = express();
const api = require('./api/routes/api.route');
const auth = require('./api/routes/auth.route');
const logger = require('morgan');
const port = process.env.PORT || 3000;

//app.use(logger('dev'));
app.use(express.static(__dirname + '/src'));

app.use('/api', api);
app.use('/auth', auth);

app.listen(port, function(){
    console.log('server ready on http://localhost:%s', port);
});