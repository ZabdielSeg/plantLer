const router = require('express').Router();
const uploader = require('../config/cloudinary.config');

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

router.post('/upload-image', uploader.single('imageUrl'), (req, res, next) => {

  if (!req.file) {
    res.status(400).json({ message: 'Please upload an image' });
    return;
  }

  res.status(200).json({ imageUrl: req.file.path });
});

router.get('/all-sellers', (req, res, next) => {
  User.find({isSeller: true})
    .populate('plants')
    .then(users => res.status(200).json(users))
    .catch(err => {
      console.log(err);
      res.status(500).json({message: 'An error occurred while getting the sellers users'})
    })
})

module.exports = router;