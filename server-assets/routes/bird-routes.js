const router = require('express').Router()
let Birds = require('../models/Bird')

router.get('/', (req, res, next) => {
  //returns all birds from DB
  Birds.find({})
    .then(birds => {
      res.send(birds)
    })
    .catch(err => {
      res.status(400).send(err)
    })
})

router.get('/:id', (req, res, next) => {
  Birds.findById(req.params.id)
    .then(bird => {
      res.send(bird)
    })
    .catch(err => {
      res.status(400).send(err)
    })
})

router.post('/', (req, res, next) => {
  Birds.create(req.body)
    .then(bird => {
      res.send(bird)
    })
    .catch(err => {
      res.status(400).send(err)
    })
})

router.delete('/:id', (req, res, next) => {
  Birds.findByIdAndDelete(req.params.id)
    .then(deletedBird => {
      res.send('Deleted')
    })
    .catch(err => {
      res.status(400).send(err)
    })
})

//EDIT CAT /api/cats/:id
router.put('/:id', (req, res, next) => {
  Birds.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then(bird => {
      res.send(bird)
    })
    .catch(err => {
      res.status(400).send(err)
    })
})

module.exports = router