const router = require('express').Router();

const User = require('../models/User.schema');

router.get('/profile/:id', (req, res, next) => {
  const { id } = req.params;
  User.findById(id)
    .populate('plants')
    .then(user => res.status(200).json(user))
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: 'An error occurred while getting the page' });
    });
});

module.exports = router;