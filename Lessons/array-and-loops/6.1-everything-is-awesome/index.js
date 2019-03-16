const randomZerosAndOnes = (num) => {
    let i = 0;
    let picks = [];
    while (i < num) {
        choices = [0,1];
        random_pick = Math.round(Math.random()*1);
        picks.push(choices[random_pick]);
        i++;
    }
    return picks;
}

let myArray = randomZerosAndOnes(100)

const ZerosToYahoos = (arr) => {
    let return_list = []
    arr.forEach((item,index,array) => {
            if (item !== 0) {
                return_list.push(item)
            } else {
                return_list.push("Yahoo")
            }
        }
    )
    return return_list
}

console.log(ZerosToYahoos(myArray));