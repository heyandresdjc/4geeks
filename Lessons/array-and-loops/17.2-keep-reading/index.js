let emails = [
    {
        subject: "XXX",
        folder: "budget",
        body: "Long and boring talk about blah blah blah...",
        finding: "10000.45"
    },
    {
        subject: "XXX",
        folder: "budget",
        body: "Long and boring talk about blah blah blah...",
        finding: "500.55"
    },
    {
        subject: "XXX",
        folder: "budget",
        body: "Long and boring talk about blah blah blah...",
        finding: "200.85"
    },
    {
        subject: "XXX",
        folder: "budget",
        body: "Long and boring talk about blah blah blah...",
        finding: "2000.67"
    },
    {
        subject: "XXX",
        folder: "budget",
        body: "Long and boring talk about blah blah blah...",
        finding: "15000.99"
    },
]


const BudgetWatch = (arr) => {
    let highlights = [];
    arr.filter(email => {
            let amount = parseFloat(email.finding);
            if (amount >= 1000) {
                highlights.push(email);
            }});
    return highlights
}


console.log(BudgetWatch(emails));