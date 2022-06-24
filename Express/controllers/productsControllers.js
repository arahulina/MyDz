
let products = [
    {id: 1, name: 'Альфа-Банк', profit: '3,35'},
    {id: 2, name: 'ОТП Банк', profit: '2,75'},
    {id: 3, name: 'Приватбанк', profit: '35,05'},
    {id: 4, name: 'ПУМБ', profit: '4,19'},
    {id: 5, name: 'Райффайзен Банк', profit: '4,86'},
    {id: 6, name: 'Сбербанк/МР Банк', profit: '3,9'},
    {id: 7, name: 'Сітібанк', profit: '1,77'},
    {id: 8, name: 'Укрексімбанк', profit: '2,68'},
    {id: 9, name: 'Укргазбанк', profit: '3,82'},
    {id: 10, name: 'Універсал Банк', profit: '3,07'},
]

exports.index = function (request, response) {
    return response.status(200).json(products);
};
