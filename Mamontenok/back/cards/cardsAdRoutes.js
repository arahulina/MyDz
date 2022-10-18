let express = require('express')
let router = express.Router()

let cardsAdController = require('./CardsAdController')

router.post('/', cardsAdController.create)

router.get('/', cardsAdController.index)
router.get('/:card_id', cardsAdController.show)

router.delete('/:card_id', cardsAdController.delete)
router.put('/:card_id', cardsAdController.put)

module.exports = router