let express = require('express');
let router = express.Router();

// Получить модуль управления продуктами
let cFruit = require('./../controllers/fruitControllers')

// Создать новую запись
// Create === POST
router.post('/', cFruit.create)

// назначить маршрут в корень на метод
// Read (All) === GET
router.get('/', cFruit.index)

// назначить маршрут с параметром
// Read (One) === GET
router.get('/:fruitId', cFruit.show)

// назначить маршрут с параметром
// Update (One) === PUT
router.put('/:fruitId', cFruit.update)

// назначить маршрут с параметром
// Delete (One) === DELETE
router.delete('/:fruitId', cFruit.delete)


// Подготовить модуль для работы в приложении
module.exports = router;