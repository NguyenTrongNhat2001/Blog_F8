const path = require('path');
const express = require('express');
const morgan = require('morgan');
const hbs = require('express-handlebars');
const route = require('./Routes');

  const app = express();
const port = 3000;
//http logger
//app.use(morgan('combined'))
//Template engine

app.engine(
    'hbs',
    hbs.engine({
        extname: '.hbs',
    }),
);

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resourses/views'));
//console.log(path.join(__dirname, 'resourses/views'))\
//static file
app.use(express.static(path.join(__dirname, 'public')));

route(app);

/*
app.post('/search', (req, res) => {
  console.log(req.query);
  res.render('search');
});
*/
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
