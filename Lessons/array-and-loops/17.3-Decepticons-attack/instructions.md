# Mobilize

The decepticons are attacking the base but it is all a cover for their true target, our emails... We need to create a filter for this emails and thankfully the DOD did the heavy lifting of turning the emails into an API(Application Programming Interface) all we have to do is loop the test array we have in search for clues of tampering.


## Instructions

1. Use the `map` to loop the variable Emails and evaluate the body key from the object

1. If the key `body` in the email object contains the word `decepticon`

1. Increase the counter variable called `decepticon_email_count` by one

1. `console.log(decepticon_email_count)`


## Hints

- `string.search('decepticon')`
