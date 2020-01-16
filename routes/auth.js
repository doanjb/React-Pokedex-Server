module.exports = (app, passport) => {
  // signing up
  app.post('/signup', (req, res, next) => {
    passport.authenticate('local-signup', { session: true }, (err, user, info) => {
      if (!user || err) {
        return res.status(403).json({ err: 'Email Address already registered.' });
      }

      return res.status(200).json(user);
    })(req, res, next);
  });

  // logging in
  app.post('/login', (req, res, next) => {
    passport.authenticate('local-login', { session: true }, (err, user, info) => {
      // redirect if there was an issue with the login
      if (!user || err) {
        return res.status(403).json({ err: 'Incorrect username or password.' });
      }

      // logging in the user
      req.login(user, { session: false }, err => {
        if (err) {
          res.send(err);
        }
        return res.status(200).json({ data: 'Login sucessful', user });
      });
    })(req, res, next);
  });

  // logging out
  app.get('/logout', (req, res) => {
    req.logout();
    res.status(200).json({ data: 'Logout sucessful' });
  });
};
