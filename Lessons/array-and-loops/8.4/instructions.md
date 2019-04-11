# Divide and Conquer

Well hello there adventurer, if you have made it this far you must be amoung the select few. As a favor to you please sort out your item you have for sale and diide them into their kind, ... aaannd scene thanks for the help as a small game development company wwe all have to wear many hats my backend guy said he can connect the inventory to the website and app we are co-developing but he is tied up with the database could you take care of the web client and create a javascript the will return 2 arrays one with item we want to sell and valueble item we don't want to sell.


## Instructions

1. Create a function called `Divide(array)` with one parameter

1. Loop the array of objects and if their vlue is less then 50 is up for sale
    - but if the item is a weapon do not sell it you can craft it

Object example:
```javascript
{
    name: "Lead Sword",
    value: 35,
    type: "weapon"
},
{
    name:"phoenix down",
    value: 75,
    type: "recovery item"
}
```

## Hints

- `for..in..` loop might come in handy here