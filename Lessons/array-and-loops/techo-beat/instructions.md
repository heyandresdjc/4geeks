# Techno Beats

You are working with a DJ and he needs a program that can create a lyrics for his songs, Yeah idk how this meeting went either, but part of being a programmer is to just look at the requirements, ask the necesary questions and deliver a program or API that meet the client expectations.


## instructions:

- Create a function that will receive an array it should be called `LyricsGenerator`
    - The array pass to the function will be something like this:

        ```javascript
        [0,0,1,1,0,0,0]
        ```
- For each Zero you will add to the string 'Boom'
- For each One you will add to the string  'Drop the base'


## Constraints
- If the there is 3 one's in a whish should output "Drop the base, Drop the base, Drop the base" then in your program you need to add a "!!!Break the base!!!" string


## Return:
A string which should be comprice of 'Boom' or'Drop the base'

Excepted Output:
```sh
Boom Boom Drop the base Drop the base Boom Boom Boom
Boom Boom Drop the base Drop the base Drop the base !!!Break the base!!! Boom Boom Boom
Boom Boom Boom
Drop the base Boom Drop the base
Drop the base Drop the base Drop the base !!!Break the base!!!
```

## Hints
Remember to use helper variables