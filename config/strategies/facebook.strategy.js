var passport = require('passport');
var FacebookStrategy = require('passport-facebook').Strategy;

module.exports = function () {
    passport.use(new FacebookStrategy({
        clientID: '280182042355441',
        clientSecret: 'e2c561ef09c9a85c68a4ec7664e78d1b',
        callbackURL: 'http://localhost:3000/auth/facebook/callback',
        passReqToCallback: true
    },
        function (req, accessToken, refreshToken, profile, done) {
            var user = {};
            
            //user.email = profile.emails[0].value;
            //user.image = profile._json.image.url;
            user.displayName = profile.displayName;

            user.facebook = {};
            user.facebook.id = profile.id;
            user.facebook.token = accessToken;
            //user.profile = JSON.stringify(profile);

            done(null, user);
        }));
};
