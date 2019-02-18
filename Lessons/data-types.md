# Data types

## String

Grouping of chararacters this characters are going to be defind as in the UTF or ASCII.

## Numbers

Any kind of integer of floating point.
## Booleans
True or False
## Arrays
Grouping of data in a list form
## Null 
Nothing is there

## Undefined

There is an object but it has not been defined in other words the var exits and can be refer to, but its content was not set , either string, number, etc.., therefore Javascript will fill out the gap with keyword undefined.
            
```javascript
    // DECLARATION
    var value;
    // DEFINITION
    value = 42;
```

Think it as the space between declaration and definition if try to use the variable in that gap you will get the undefine response.

## Objects
Grouping of other data types for example.
```javascript
    person = {
        name: "John Doe",
        age: 55,
        sex: "male",
        hobbies: ["biking", "reading"],
        Married: true
    }

    console.log(person.name)
    // will print John Doe
```