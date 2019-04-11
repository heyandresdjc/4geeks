# Parking Check
In this exercise we need you to write software to check what is the next available parking spot, you Need to check from the ground floor up therefore you need to check from first floor up.

for example:
```javascript
let parking_state = [
    [1,1,1,1,1],
    [1,1,0,1,1]
]

// You're function should take this array and return the position of each zero which is the parking spaces open in the parking garage
function ParkingState(myArray){
  // Where the magic happen
  return "Floor: 2, Spot: 3"
}
console.log(ParkingState(parking_state))
```

## Instructions
1. make a function called `ParkingState()`

1. Initialize the main loop

1. Initialize the loop inside

1. Check each spot in the row you are looping
    - If there is no spot available you should return
    - No parking available

## Hints 
- If the spot is empty, Represented by a zero, break out of the loop and return an String with the floor and spot number like this
- Floor 2 has Spot 3 available
- Placeholder variables are not needed but can Help A LOT you can use forEach, map, while, or for loop in this block to solve it

