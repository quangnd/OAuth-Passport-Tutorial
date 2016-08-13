var passport = require('passport');

var TwitterStrategy = require('passport-twitter').Strategy;

module.exports = function () {
    passport.use(new TwitterStrategy({
        consumerKey: 'zHZl3BLbPVfvEMjDMoe1Oq1nl',
        consumerSecret: 'Tan6Aw9vd2BGoAkSHPR2DmyRCLOyN1Fp7h9H1aPVbOv3LGfiJ2',
        callbackURL: 'http://localhost:3000/auth/twitter/callback',
        passReqToCallback: true
    },
        function (req, token, tokenSecret, profile, done) {
             var user = {};

            user.image = profile._json.profile_image_url;
            user.displayName = profile.displayName;

            user.twitter = {};
            user.twitter.id = profile.id;
            user.twitter.token = token;

            done(null, user);
        }
    ));
};
