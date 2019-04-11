function normalFunction() {
    return "Hello, World!"
}
console.log(typeof normalFunction.prototype)

const arrowFunction = () => "Hello, World!"

console.log(typeof arrowFunction.prototype)