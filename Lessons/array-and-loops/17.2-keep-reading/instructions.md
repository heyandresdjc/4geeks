# Keep it in the budget please

Okay with the great filter and folder system you have arranged for your email you tend to not pay attention to budgets and your project went over, I don't know what the Project manager is doing ugh, well we need to enhance the filter to watch out for budgets and then read inside the body of the email if total is greater than USD$1,000.00. Like a good developers we are found some js library that helps you with the data parcing and return an array of object that looks like this:

```javascript
{
    subject: "XXX",
    folder: "budget",
    body: "Long and boring talk about blah blah blah..."
    finding: "10000"
}
```

Okay now that we have mesh eveything you, your job is to find all the emails with "budget" in the subject line and turn the finding into interger to evaluate them

## Instruction

1. Create a function call `BudgetWatch()`
    - From this function you are going to call helper functions

1. Use the filter function you learned in 14, 14.1 and 14.2

1. Remeber every penny counts and you need to return the decimal places as well


## Hints

- If you need help how to use a function with another you can go to JavaScript functions classroom and refer to [#1 on how to call a function](https://repl.it/teacher/assignments/10841)
