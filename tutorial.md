# Intro

Open Authentication

My Application ==> ? Who are you ? Tell them who I am => Google
My Application <== This guy is quangnd <== Google

Authorization

My App => Let me see your tweets => Let's them see my tweets => Twitter
My App <== Here is a token to get to his tweet <== Twitter

Tokens

My App ==>  1A2B3C4D ==> Twitter

(Why not username & password??? Why use token? )
(For example: you are only accessed only one of four properties of Twitter: Profile, Tweets, Post, Followers - not at all; so you will be provided a token key for one service)

Passport (Insta, FB, Google, Twitter...)

==
# Demo App

Use express-generator to generate App

## Sign in with Google
1. Passport middleware?
  - Install modules: passport express-session passport-google-oauth
  - Config passport with passport module
2. Google console
  - Setting up your app at console.developers.google.com (create new project, get credentials...);
  - Enables Google+ API, Contacts API.

3. Google OAuth strategy
  - var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

  `passport.use(new GoogleStrategy({
    clientID: '358160442875-m0802l6ind6lmkvife4kc7hmhl88rl7a.apps.googleusercontent.com',
    clientSecret: '8oTkQKOaxnYPUmIt-wOlRpD-',
    callbackURL: 'http://localhost:3000/auth/google/callback'
  },
    function (req, accessToken, refreshToken, profile, done) {
      done(null, profile);
    }
  ));`

4. Use Google profile data

## Adding in more providers
1. Code structure
2. Use passport to secure routes
3. Twitter integration
4. Facebook integration