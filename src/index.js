const path = require('path');
const methodOverride = require('method-override')
const express = require('express');
const morgan = require('morgan');
const hbs = require('express-handlebars');
const route = require('./Routes');
const db = require('./config/db');
const app = express();
const port = 3000;
//http logger
//app.use(morgan('combined'))
//Template engine

db.connect();
app.engine(
    'hbs',
    hbs.engine({
        extname: '.hbs',
        helpers: {
           sum: (a,b) => a+b,
        }
    }),
);

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resourses', 'views'));
//console.log(path.join(__dirname, 'resourses/views'))\
//static file
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(methodOverride('_method'))
app.use(express.urlencoded({ extended: true }));
route(app);

/*
app.post('/search', (req, res) => {
  console.log(req.query);
  res.render('search');
});
*/
app.listen(process.env.PORT, () => {
    console.log(`App listening on port ${port}`);
});
