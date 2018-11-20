const router = require('express').Router()
let Dogs = require('../models/Dog')


// router.get('/', (req, res, next) => {
//   console.log('Wooff')
//   next()
// })


router.get('/', (req, res, next) => {
  //returns all cats from DB
  Dogs.find({})
    .then(dogs => {
      res.send(dogs)
    })
    .catch(err => {
      res.status(400).send(err)
    })
})

router.get('/:id', (req, res, next) => {
  Dogs.findById(req.params.id)
    .then(dog => {
      res.send(dog)
    })
    .catch(err => {
      res.status(400).send(err)
    })
})

router.post('/', (req, res, next) => {
  Dogs.create(req.body)
    .then(dog => {
      res.send(dog)
    })
    .catch(err => {
      res.status(400).send(err)
    })
})

router.delete('/:id', (req, res, next) => {
  Dogs.findByIdAndDelete(req.params.id)
    .then(deletedDog => {
      res.send('Deleted')
    })
    .catch(err => {
      res.status(400).send(err)
    })
})

//EDIT CAT /api/cats/:id
router.put('/:id', (req, res, next) => {
  Dogs.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then(dog => {
      res.send(dog)
    })
    .catch(err => {
      res.status(400).send(err)
    })
})

module.exports = router