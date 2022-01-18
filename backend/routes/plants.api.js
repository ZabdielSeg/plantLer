const router = require('express').Router();
const mongoose = require('mongoose');
const User = require('../models/User');
const Plant = require('../models/Plant.schema');

const isLoggedIn = require('../middlewares/isLoggedIn');
const isSeller = require('../middlewares/isSeller');

router.get('/plant/:id', (req, res, next) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(400).json({ message: 'Specified id is not valid' });
    return;
  }

  Plant.findById(id)
    .populate('owner')
    .then(plantFound => res.status(200).json(plantFound))
    .catch(err => {
      console.log(err);
      res.status(500).json({message: 'An error occurred while getting the plant information'});
    });
});

router.post('/create-plant', isSeller, (req, res, next) => {
  const { plantName, description, price, light, location } = req.body;

  if(!plantName || description.length < 30 || !price || !light || !location) {
    return res
      .status(400)
      .json('Please fill al the blanks correctly');
  }

  Plant.create({ plantName, description, price, light, location, owner: req.user._id })
    .then(response => {
      return User.findByIdAndUpdate(req.user._id, { $push: {plants: response._id}});
    })
    .then(plantCreated => res.json({ message: `${plantCreated.plantName} created succesfully`}))
    .catch(err => res.status(500).json({message: 'An error occured while creating the plant'}));
});

router.put('/edit-plant/:id', isSeller, (req, res, next) => {
  const { plantName, description, price, light, location } = req.body;
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(400).json({ message: 'Specified id is not valid' });
    return;
  }

  Plant.findByIdAndUpdate(id, { plantName, description, price, light, location })
    .then(() => res.status(201).json({message: 'Plant updated correctly'}))
    .catch(err => {
      console.log(err);
      res.status(500).json({message: 'An error occurred while saving the updates'});
    });
});

router.delete('/delete-plant/:id', isSeller, (req, res, next) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(400).json({ message: 'Specified id is not valid' });
    return;
  }

  Plant.findByIdAndRemove(id)
    .then(() => res.status(200).json({message: `PLant with id: ${id} was deleted succesfully`}))
    .catch(err => {
      console.log(err);
      res.status(500).json({message: 'An error occurred whil trying to delete the plant'});
    });
});

router.get('/all-plants', (req, res, next) => {
  Plant.find()
    .populate('owner')
    .then(allPlants => res.status(200).json(allPlants))
    .catch(err => {
      console.log(err);
      res.status(500).json('message: An error occurred while getting the plants');
    });
});


module.exports = router;