
let products = [
    {id: 1, name: 'Аватар', profit: '3286'},
    {id: 2, name: 'Унесёенные ветром', profit: '3739'},
    {id: 3, name: 'Титаник', profit: '3108'},
    {id: 4, name: 'Звёздные войны. Эпизод IV: Новая надежда', profit: '3071'},
    {id: 5, name: 'Мстители: Финал', profit: '2823'},
]

exports.index = function (request, response) {
    return response.status(200).json(products);
};
