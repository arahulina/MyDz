/**
 * рішення завдання №1
 */

let result = document.getElementById("result")

document.getElementById("btnStart").onclick = function () {
    let userNumber = document.getElementById("userNumber").value
    if (userNumber >= 0 && userNumber < 12) {
        result.innerText = "Дитина"
    } else if (userNumber >= 12 && userNumber < 18) {
        result.innerText = "Підліток"
    } else if (userNumber >= 18 && userNumber < 60) {
        result.innerText = "Дорослий"
    }
    else {
        result.innerText = "Пенсіонер"
    }

}