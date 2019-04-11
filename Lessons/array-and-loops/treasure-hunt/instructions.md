# Teasure hunt

Quick we need your help are doing to provide you with an map all we could do was to format it as an array of arrays we need you to find specific coordinates for the location.

## Explanation

A `Matrix` is an array of arrays as shows bellow:

```javascript
// figure 1.0
myArray = [
[1,2,3,4],
[5,6,7,8],
[9,10,11,12]
];
```

If you wanted to get the array with the number 7 you will use the bellow syntax

```javascript
let array_with_7 = myArray[1];
```

I want to get the #7 out of the array you can use this syntax:

```javascript
let num_7 = array_with_7[2];
```

Now the variable `num_7` contains the number seven and this is an acceptable answer, but we can reduce the code significantly.

```javascript
let array_with_7 = myArray[1];
let num_7 = array_with_7[2];

/*
    The syntax we can get an any element if so choose, but 
    we are programmer and we need to have a shorter route 
    to get at the same result, and we do.
*/

let num_7 = myArray[1][2];
```

# Instructions

1. Create a function called `locator` which should take the latitude and longitude for the ma location
    - This function should take 3 parameters
    - One for the arrays of arrays one for logitude and last but not least one for latitude

1. Please return value in the location