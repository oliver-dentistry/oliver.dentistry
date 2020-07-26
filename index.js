const express = require('express'),
    morgan = require('morgan')
    app = express(),
    PORT = 3000


//Middleware
app
    .use(morgan('dev'))

//View engine
app
    .set('view engine', 'pug')

//Static route
app
    .use(express.static('./public'))

//Routes
app
    .use(require('./routes/landing'))
    .use(require('./routes/home'))
    .use(require('./routes/about'))
    .use(require('./routes/contact'))

//PORT
app    
    .listen(PORT)