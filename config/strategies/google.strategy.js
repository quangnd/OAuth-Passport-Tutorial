var passport = require('passport');

var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

module.exports = function () {
    passport.use(new GoogleStrategy({
        clientID: '358160442875-m0802l6ind6lmkvife4kc7hmhl88rl7a.apps.googleusercontent.com',
        clientSecret: '8oTkQKOaxnYPUmIt-wOlRpD-',
        callbackURL: 'http://localhost:3000/auth/google/callback'
    },
        function (req, accessToken, refreshToken, profile, done) {
            var user = {};

            user.email = profile.emails[0].value;
            user.image = profile._json.image.url;
            user.displayName = profile.displayName;

            user.google = {};
            user.google.id = profile.id;
            user.google.token = accessToken;

            done(null, user);
        }
    ));
};
