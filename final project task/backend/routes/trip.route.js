const express = require('express');
const tripRoute = express.Router();
// model
let TripModel = require('../models/Trip');
tripRoute.route('/book-trip').post((req, res, next) => {
  TripModel.create(req.body, (error, data) => {
  if (error) {
    return next(error)
  } else {
    res.json(data)
  }
})
});
tripRoute.route('/').get((req, res, next) => {
    TripModel.find((error, data) => {
     if (error) {
       return next(error)
     } else {
       res.json(data)
     }
   })
 })
tripRoute.route('/edit-trip/:id').get((req, res, next) => {
   TripModel.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})
// Update
tripRoute.route('/update-trip/:id').put((req, res, next) => {
  TripModel.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data)
      console.log('Scheduled trip successfully updated!')
    }
  })
})
// Delete
tripRoute.route('/delete-trip/:id').delete((req, res, next) => {
  TripModel.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})

module.exports = tripRoute;