# Regular Functions
Functions are one of the fundamental building blocks in JavaScript. A function is a JavaScript procedure—a set of statements that performs a task or calculates a value. To use a function, you must define it somewhere in the scope from which you wish to call it.

## Syntax
```javascript
function sayHi(name){
    alert("Hello "+name);
}
```

# Arrow Functions
An arrow function expression is a syntactically compact alternative to a regular function expression, although without its own bindings to the this, arguments, super, or new.target keywords. Arrow function expressions are ill suited as methods, and they cannot be used as constructors.

## Syntax
```javascript
const sayHi = (name) => {
    alert("Hello "+name);
}
```