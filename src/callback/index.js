function sum(num1, num2) {
    return num1 + num2
}

function calc(num1, num2, callback) {
    return callback(num1, num2)
}

console.log(calc(2, 3, sum))


setTimeout(() => {
    console.log("Callback ejecutado")
}, 2000)

// Callback que recibe un argumento

function greeetings(name) {
    console.log(`... ${name}`)
}

//Argumento del callback se pasa al final de la función
setTimeout(greeetings, 2000, "Seneca")