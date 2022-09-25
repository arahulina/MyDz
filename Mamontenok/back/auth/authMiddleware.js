jwt = require('jsonwebtoken')

const authMiddleware = function (request, response, next) {

    // Получаю ключ из любой точки
    const token =
        request.body.token ||
        request.query.token ||
        request.headers["x-access-token"] ||
        request.headers.authorization;

    // Если передали ключ - проверю его
    if (token !== null && token !== "null" ) {
        jwt.verify(
            token,
            process.env.JWT_KEY,
            (err, jwtUser) => {

                if (err) {} // если ошибка - просто пойду дальше
                else {
                    request.user = jwtUser // передаю всем кто пришел
                }
            }
        )
    }

    // Пойти дальше
    next()
}

module.exports = authMiddleware;