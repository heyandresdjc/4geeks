let list_of_numbers = [
    4,	80,	85,	59,	37,
    25,	5,	64,	66,	81,
    20,	64,	41,	22,	76,
    76,	55,	96,	2,	68,
];

function TwoList(Arr){
    let odd = [];
    let even = [];
    Arr.forEach(
        function(value){
            if (value % 2 === 0) {
                even.push(value)
            } else {
                odd.push(value)
            }
        }
    )
    return [odd, even]
}

console.log(TwoList(list_of_numbers))