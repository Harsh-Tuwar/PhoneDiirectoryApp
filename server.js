require('./model/db');

const express = require('express');
const path =  require('path');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');

const userController = require('./controller/userController');

var app = express();

app.use(bodyParser.urlencoded({ extended : true }));

app.use(bodyParser.json());

app.set('views', path.join(__dirname,'/views/'));

app.engine('hbs', exphbs({ extname: 'hbs', defaultLayout: 'mainLayout', layoutsDir: __dirname + '/views/layouts' }));

app.set('view engine', 'hbs');

app.listen(8080, () =>{
    console.log('Express server is listening at port: 8080');
    console.log('\nPlease visit this website for your app: localhost:8080/user');
});

app.use('/user', userController);