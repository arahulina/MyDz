let express = require('express');
let router = express.Router();

// Получить модуль управления продуктами
let cProducts = require('./../controllers/productController')

// Создать новую запись
// Create === POST
router.post('/', cProducts.create)

// назначить маршрут в корень на метод
// Read (All) === GET
router.get('/', cProducts.index)

// назначить маршрут с параметром
// Read (One) === GET
router.get('/:productId', cProducts.show)

// назначить маршрут с параметром
// Update (One) === PUT
router.put('/:productId', cProducts.update)

// назначить маршрут с параметром
// Delete (One) === DELETE
router.delete('/:productId', cProducts.delete)

// Подготовить модуль для работы в приложении
module.exports = router;