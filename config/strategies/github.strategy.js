var passport = require('passport');
var GitHubStrategy = require('passport-github').Strategy;

module.exports = function () {
    passport.use(new GitHubStrategy({
        clientID: '1c84c5b0e9abec8425cf',
        clientSecret: 'a8eebec1e880b60f5ab28916aa66fa551c2ff801',
        callbackURL: 'http://localhost:3000/auth/github/callback'
    },
        function (accessToken, refreshToken, profile, done) {
            var user = {};

            user.email = profile.emails[0].value;
            user.image = profile.photos[0].value;
            user.displayName = profile.displayName;

            user.github = {};
            user.github.id = profile.id;
            user.github.token = accessToken;
            user.profile = JSON.stringify(profile);

            done(null, user);
        }
    ));
};
