const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const index = require('./router/index');
const tasks = require('./router/tasks');

const app = express();
const port = 3000;

// View engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

// Set static folder
app.use(express.static(path.join(__dirname, 'client')));

// Body parse middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/', index);
app.use('/api', tasks);

app.listen(port, function () {
    console.log('Server started on port '+ port);
});