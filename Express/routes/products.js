let express = require('express');
let router = express.Router();

let cProducts = require('./../controllers/productsControllers')

router.get('/', cProducts.index);

module.exports = router;