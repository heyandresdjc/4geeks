# Mobilize

The decepticons are attacking the base but it is all a cover for their true target, our emails... weneed to create a filter for this emails thankfully the DOD did the heavy lifting of turning the emails into an API(Application Programming Interface) and another junior developer boild it down to a function that returns the data in an array for you.


## Instructions

1. Call the `EmailAPI()` and assign it to a variable called `let emails`(remember to use let to declare variables)

1. Create a function called `EmailFilter`

1. Return a new list of object with an extra key value called suspicious and set the key to a boolean value true or false

1.  Look for the word "decepticon" if the search find anything like that turn the suspicious key to `true`