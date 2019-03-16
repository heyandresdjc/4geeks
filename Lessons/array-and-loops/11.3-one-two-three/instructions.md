#  And One and a Two and a Three

Following the loops this is another loop we have in javascript, I know we are almost done, the `for...in...` loop accoring to MDN "For each distinct property, JavaScript executes the specified statements."

### Syntax
```javascript
//theroy
for (variable in object) {
  statements
}

// reality
contact = {
    fullname: "John Doe",
    phone: "123-123-2134",
    email: "test@nowhere.com"
};
// the key variable can be anything it could be momo, raichu, harry, mordor it could be name anything.
for(key in contact){
    // this line will console log out the key but not the value.
    console.log(key);
}
```

## Instruction

1. you will be be provided the contact object we will need you to loop the object and console log
```sh
key: "value"
fullname : "John Doe"
phone : "123-123-2134"
email : "test@nowhere.com"
```

## Hints
[MDN for in loop reference]('https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration#for...in_statement)