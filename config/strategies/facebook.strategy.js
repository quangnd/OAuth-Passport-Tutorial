var passport = require('passport');
var FacebookStrategy = require('passport-facebook').Strategy;
var User = require('../../models/userModel');

module.exports = function () {
    passport.use(new FacebookStrategy({
        clientID: '280182042355441',
        clientSecret: 'e2c561ef09c9a85c68a4ec7664e78d1b',
        callbackURL: 'http://localhost:3000/auth/facebook/callback',
        passReqToCallback: true
    },
        function (req, accessToken, refreshToken, profile, done) {
            if (req.user) {
                var query = {};
                if (req.user.google) {
                    console.log('google');
                     query = {
                        'google.id': req.user.google.id
                    };
                } else if (req.user.twitter) {
                    query = {
                        'twitter.id': req.user.twitter.id
                    };
                }
                User.findOne(query, function (error, user) {
                    console.log(error);
                    console.log('user');
                    if (user) {
                        user.facebook = {};
                        user.facebook.id = profile.id;
                        user.facebook.token = accessToken;

                        user.save();
                        done(null, user);
                    }
                });

            } else {

                var query = {
                    'facebook.id': profile.id
                };

                User.findOne(query, function (error, user) {
                    if (user) {
                        console.log('found');
                        done(null, user);
                    } else {
                        console.log('not found. Create new!');
                        var user = new User;
                        //user.email = profile.emails[0].value;
                        //user.image = profile._json.image.url;
                        user.displayName = profile.displayName;

                        user.facebook = {};
                        user.facebook.id = profile.id;
                        user.facebook.token = accessToken;
                        //user.profile = JSON.stringify(profile);

                        user.save();
                        done(null, user);
                    }
                });

            }
        }));
};
