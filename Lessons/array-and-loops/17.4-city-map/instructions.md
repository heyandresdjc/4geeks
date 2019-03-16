# You're too early!

It seems you arrive to the place where you were going to meet you friends too early so decided to use the city app map to go for a walk, in these case you have to make sure the algorithm returns back and array of directions you can do the walk and back to the location in the predetermine time.

## Constrains

- INPUT: array of string, integer.

- each element in the array is going to be either  `'n'`,`'s'`,`'w'`, or `'e'`.

- Each direction that is given to you means you have travel 1 min in that direction and one city block.

example:
    go `'s'` which means you went south for one minute for one city block, to travel back to the same spot you need `'n'`

- All input will always be even numbers

## Instructions

1. Create a function and call it `RouteVerification()`

1. Verify the route is not so long you cannot go back in time


## Hints

n = + 1

e = + 1

s = - 1

w = - 1