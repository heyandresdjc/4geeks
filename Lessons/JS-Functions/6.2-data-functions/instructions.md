# Data type functions
Now that you understand there is multiple data types there is standard functions that applies to a specific data for example arrys have .forEach(), which allow us to loop an array for its elements with using the for loop and the index.

## JavaScript String Methods
- resources
    - [W3 JavaScript String Methods](https://www.w3schools.com/js/js_string_methods.asp)

```javascript
    let name = "John Doe"
    console.log(name.length);
    // will print 8 to the console
```

## JavaScript Array Methods
- resources
    - [W3 JavaScript Array Methods](https://www.w3schools.com/js/js_array_methods.asp)

```javascript
    let sequence = [1,2,3,4,5];
    total = 0;
    sequence.forEach(
        function(item){
            total += item;
        }
    )
    console.log(total)
    // will print 15 to the console
```