const newRoute = require('./news');
const siteRoute = require('./site');

function route(app) {
    app.use('/search', siteRoute);

          app.use('/news', newRoute);

    app.use('/', siteRoute);
}

module.exports = route;
