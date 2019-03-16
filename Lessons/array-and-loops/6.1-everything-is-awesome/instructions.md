# Everything is awesome

Understanding how iterating arrays is a very important developer skill and forEach loop you just went through it something I like to `reiterate`... Get it cause we are going to iterate... Nevermind I am not funny but I can go in a loop all day long, Okay I'll stop

forEach loop quick Recap:
```javascript
// This is my starting point, I have start an simple array of numbers 1 - 4
let myArray = [1,2,3,4]

// I called the variable where the array is pointed
myArray.forEach(
    // I declare another variable assign to the singular of each number, this will be the equvelant to myArray[i] in the for loop
    (item,
    // the secon position returns the index position in the array you are working on
    index,
    // returns the array you are working on
    array) => {
        // then in beteween the curly brackets I place the logic I want to apply to the singular item
        console.log(item-1)
})
```

## Instructions
- use the `forEach` loop to find all the Zeros in this array and replace it with the string `"Yahoo"` index number