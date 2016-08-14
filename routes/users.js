var express = require('express');
var router = express.Router();
var facebook = require('../services/facebook')('280182042355441', 'e2c561ef09c9a85c68a4ec7664e78d1b');

router.use('/', function (req, res, next) {
  if (!req.user) {
    res.redirect('/');
  }
  next();
});

router.get('/', function (req, res) {
  console.log(req.user);
  if (req.user.facebook) {
    console.log('if facebook');
    facebook.getImage(req.user.facebook.token,
      function (imageUrl) {
        console.log('got data');
        console.log(imageUrl);
        req.user.facebook.image = imageUrl;
        facebook.getFriends(req.user.facebook.token,
          function (results) {
            console.log(results);
            req.user.facebook.friends = results.total_count;
            res.render('users', {
              user: req.user
            });
          });
      });
  } else {
    res.render('users', {
      user: req.user
    });
  }

});


module.exports = router;
