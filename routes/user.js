module.exports = (app, db) => {
  // route to get the user's favorite pokemon
  app.get('/user/favorites/:userId', (req, res) => {
    db.User.findById({ _id: req.params.userId })
      .then(user => {
        res.status(200).json(user);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });

  // route to add to the user's favorite pokemon
  app.put('/user/add/favorites/:userId', (req, res) => {
    db.User.findOneAndUpdate(
      { _id: req.params.userId },
      { $addToSet: { favorites: req.body.pokemonId } },
      { useFindAndModify: false }
    )
      .then(user => {
        res.status(200).json(user);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });

  // route to add to the user's favorite pokemon
  app.put('/user/remove/favorites/:userId', (req, res) => {
    db.User.findOneAndUpdate(
      { _id: req.params.userId },
      { $pull: { favorites: req.body.pokemonId } },
      { useFindAndModify: false }
    )
      .then(user => {
        res.status(200).json(user);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });
};
