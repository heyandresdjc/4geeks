let testArr = []

for (let index = 1; index < 11; index++) {
    testArr.push(index)
}


const EQ = (arr) => {
    let holder = []
    arr.forEach(num => {
        let holder_item = ""
        for (let i = 0; i < num; i++) {
            holder_item += "|"
        }
        holder.push(holder_item)
    });
    return holder;
}


EQ(testArr);
let hello = EQ([3,5,1,7,3,8,9])

// if (EQ.prototype) {
    
// } else {
    
// }