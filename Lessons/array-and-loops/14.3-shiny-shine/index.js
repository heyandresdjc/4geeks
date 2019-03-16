let test_body = [1,0,1,0,1,1,0,0,1,1];

const GoldRush = (num) => {
    if (num === 0) {
        return false;
    }
    return true;
}

let gold_found = test_body.filter(item => {
    if (GoldRush(item)) {
        return item;
    }
})

console.log(gold_found);