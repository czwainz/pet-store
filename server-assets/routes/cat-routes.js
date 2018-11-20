const router = require('express').Router()
let Cats = require('../models/Cat')


// router.get('/', (req, res, next) => {
//   console.log('Meow')
//   next()
// })


router.get('/', (req, res, next) => {
  //returns all cats from DB
  Cats.find({})
    .then(cats => {
      res.send(cats)
    })
    .catch(err => {
      res.status(400).send(err)
    })
})

router.get('/:id', (req, res, next) => {
  Cats.findById(req.params.id)
    .then(cat => {
      res.send(cat)
    })
    .catch(err => {
      res.status(400).send(err)
    })
})

router.post('/', (req, res, next) => {
  Cats.create(req.body)
    .then(cat => {
      res.send(cat)
    })
    .catch(err => {
      res.status(400).send(err)
    })
})

router.delete('/:id', (req, res, next) => {
  Cats.findByIdAndDelete(req.params.id)
    .then(deletedCat => {
      res.send('Deleted')
    })
    .catch(err => {
      res.status(400).send(err)
    })
})

//EDIT CAT /api/cats/:id
router.put('/:id', (req, res, next) => {
  Cats.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then(cat => {
      res.send(cat)
    })
    .catch(err => {
      res.status(400).send(err)
    })
})

module.exports = router