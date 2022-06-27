// Отримати бібліотечну функцію для генерації ID
const lib = require ("../lib/guid")
const generateUUID = lib.generateUUID

let fruits = [
    {_id: generateUUID(), name: 'Apple', price:15},
    {_id: generateUUID(), name: 'Apricot', price:90},
    {_id: generateUUID(), name: 'Pear', price:80},
    {_id: generateUUID(), name: 'Banana', price:40},
    {_id: generateUUID(), name: 'Peach', price:130},
    {_id: generateUUID(), name: 'Plum', price:70},
];

/**
 * Створити новий фрукт
 * Create === POST
 * @param request
 * @param response
 */
exports.create = function (request, response) {
    // Отримали новий фрукт на сервері
    let bodyFruit = request.body
    // Створили запис у базі даннх
    const newFruit = new Fruit(bodyFruit)

    // Зберегли запис у базі данных
    newFruit.save(function (err) {
        if (err) { // Якщо помилка - повернути помилку
            console.log(err)
            return response.status(422).json(err)
        } else { // Якщо все добре - повернути новий фрукт
            return response.status(201).json(newFruit);
        }
    });
}
/**
 * Повернути всі фрукти
 * Read (All) === GET
 * @param request
 * @param response
 */
exports.index = function (request, response) {
    Fruit.find({}, function(err, allFruits){

        if(err) {
            console.log(err);
            return response.status(404).json(err);
        }
        else {
            return response.status(200).json(allFruits);
        }
    });
}

/**
 * Повернути певний фрукт
 * Read (One) === GET
 * @param request
 * @param response
 */
exports.show = function (request, response) {
    // console.log(request.params.studentId)
    let findId = request.params.fruitId

    Fruit.findById(findId, function(err, allFruits){

        if(err) {
            console.log(err);
            return response.status(404).json(err);
        }
        else {
            return response.status(200).json(allFruits);
        }
    });
}

/**
 * Оновити(змінити) певний фрукт
 * Update (One) === PUT
 * @param request
 * @param response
 */
exports.update = function (request, response) {
    let findId = request.params.fruitId
    let upFruit = request.body

    Fruit.findByIdAndUpdate(findId, upFruit, function (err, newFruit) {
        if(err) {
            console.log(err);
            return response.status(500).json(err);
        }
        else {
            console.log('Update Ok')
            return response.sendStatus(204);
        }
    })

}

/**
 * Видалити певний фрукт
 * Delete (One) === DELETE
 * @param request
 * @param response
 */
exports.delete = function (request, response) {
    let findId = request.params.fruitId
    console.log('Delete:' + findId)

    Fruit.findByIdAndDelete(findId, function(err){

        if(err) {
            console.log(err);
            return response.status(500).json(err);
        }
        else {
            console.log('Del Ok')
            return response.sendStatus(200);
        }
    });
}