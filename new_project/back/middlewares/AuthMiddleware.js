jwt = require('jsonwebtoken')

exports.auth = function (request, response, next){
    if (rqguest.headers.authorization){
        jwt.verify(
            request.headers.authorization.split(' '),
            process.env.JWT_KEY,
            (err, jwtUser) => {
                if (err){
                    console.log("Ошибка расшифровки")
                    console.log(err)
                    next()
                }
                console.log("Восстановленные данные")
                console.log(jwtUser)
            }
        )
    }
}