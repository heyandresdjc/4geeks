let inventory = [
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
]
const Divide = (arr) => {
    for_sale = []
    for (const key in arr) {
        const item = arr[key];
        if (item.type !== "weapon") {
            for_sale.push(item);
        }
    }
    return for_sale;
}

console.log(Divide(inventory));