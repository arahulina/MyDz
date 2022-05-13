/**
 * рішення завдання №2
 */
let result = document.getElementById("result")

document.getElementById("btnStart").onclick = function () {
    let userNumber = document.getElementById("userNumber").value
    if (userNumber == 0) {
        result.innerText = ")"
    } else if (userNumber == 1) {
        result.innerText = "!"
    } else if (userNumber == 2) {
        result.innerText = "@"
    } else if (userNumber == 3) {
        result.innerText = "#"
    } else if (userNumber == 4) {
        result.innerText = "$"
    } else if (userNumber == 5) {
        result.innerText = "%"
    } else if (userNumber == 6) {
        result.innerText = "^"
    } else if (userNumber == 7) {
        result.innerText = "&"
    } else if (userNumber == 8) {
        result.innerText = "*"
    } else {
        result.innerText = "("
    }
}