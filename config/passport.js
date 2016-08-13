var passport = require('passport');

module.exports = function (app) {
    app.use(passport.initialize());
    app.use(passport.session());

    passport.serializeUser(function (user, done) {
        done(null, user); //place user into session
    });

    passport.deserializeUser(function (user, done) {
        done(null, user);
    });

    require('./strategies/google.strategy')();
    require('./strategies/twitter.strategy')();
    require('./strategies/facebook.strategy')();
};

