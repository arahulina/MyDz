const adModel = require('./CardsAdModel')

/**
 * Создание нового объявления
 * Могут только зарегистрированные пользователи
 * @param request
 * @param response
 * @returns {*}
 */
exports.create = function (request, response){
    // Если пользователь не авторизован - нет ключа
    if(!request.user) {
        return response.status(401).json({message: "Вы не вошли в систему"})
    }

    let bodyCard = request.body
    bodyCard.author_id = request.user._id // Фиксируем пользователя (автора объявления)
    bodyCard.created_at = Date.now()

    // TODO: потом тут получать картинки

    let newCard = new adModel (bodyCard)

    console.log(newCard)

    // Сохранили запись в базе данных
    newCard.save(function(err){
        if(err) { // Если ошибка - вернуть ошибку
            console.log(err)
            return response.status(422).json(err)
        }
        else { // Если все хорошо - вернуть новое объявление
            return response.status(201).json(newCard);
        }
    });

}


/**
 * Вернуть всe объявления
 * Read (All) === GET
 * @param request
 * @param response
 */
exports.index = async function (request, response) {
    console.log("Пришел за всеми товарами")

    // Данные для постраничного вывода объявлений

    // Количество объявлений на страницу
    let per_page = 3;
    if (request.query.per_page !== undefined) per_page = request.query.per_page

    // Текущая страница
    let page = 1;
    if (request.query.page !== undefined) page = request.query.page

    console.log("Элементов на страницу: " + per_page)
    console.log("Текущая страница: " + page)

    let total = await adModel.count();
    let allCards = await adModel.find({}).sort('created_at').skip((per_page*(page - 1))).limit(per_page);
    let send = {
        total: total, // Сколько всего в коллекции
        page: page, // Какая сейчас страница открыта
        per_page: per_page, // Сколько элементов на страницу
        data: allCards // Сами элементы данной страницы
    }
}


/**
 * Вернуть конкретное объявление
 * Read (One) === GET
 * @param request
 * @param response
 */
exports.show = function (request, response) {
    // console.log(request.params.studentId)
    let findId = request.params.card_id

    adModel.findById(findId, function(err, card){

        if(err) {
            console.log(err);
            return response.status(404).json(err);
        }
        else {
            return response.status(200).json(card);
        }
    });
}



exports.update = function (request, response) {
    if(!request.user) {
        return response.status(401).json({message: "Вы не вошли в систему"})
    }

    adModel.findById(findId, function(err, card){

        if(err) {
            console.log(err);
            return response.status(404).json(err);
        }
        else {
            if (card.author_id.toString() !== request.user._id ) {
                return response.status(403).json({message: "У вас нет прав обновить товар"})
            }

            // ДЗ - Написать обновление записи

            return response.status(204).send("Success!");
        }
    });
}


exports.delete = function (request, response) {
    console.log("start del")
    // Если пользователь не авторизован - нет ключа
    if(!request.user) {
        return response.status(401).json({message: "Вы не вошли в систему"})
    }

    let findId = request.params.card_id

    // Ищу запись в базе данных
    adModel.findById(findId, function(err, card){

        if(err) {
            console.log(err);
            return response.status(404).json(err);
        }
        else {
            if (card.author_id.toString() !== request.user._id ) {
                return response.status(403).json({message: "У вас нет прав удалить товар"})
            }

            adModel.findByIdAndDelete(findId , function (err) {
                if(err) {
                    console.log(err);
                    return response.status(422).json(err);
                }

                return response.status(204).send("Success!");
            })

        }
    });

    // Найти то что нужно удалить
    // Сравнить автора и того, кто пришел - и удалять только тогда - когда автор совпадает


}