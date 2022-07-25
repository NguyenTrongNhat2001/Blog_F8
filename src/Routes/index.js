const newRoute = require('./news');
const siteRoute = require('./site');
const coursesRoute = require('./courses');

function route(app) {
    // app.use('/search', siteRoute);
    app.use('/courses', coursesRoute);

    app.use('/news', newRoute);

    app.use('/', siteRoute);
}

module.exports = route;
