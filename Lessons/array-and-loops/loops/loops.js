// Original list where you are pulling the data from
king_of_list = [
    [0,1,0,1,0,1,0,1,0,1],
    [0,1,0,1,0,1,0,1,0,1],
    [0,1,0,1,0,1,0,1,0,1],
    [0,1,0,1,0,1,0,1,0,1],
    [0,1,0,1,0,1,0,1,0,1]
]

// new list you are creating from the king_of_list
new_king = []
// loop each list separtly
king_of_list.map(item => {
    // create a temporary variable that will hold the sum
    var temp = 0;
    // now you have single out each list then you list out the single item inside the list child list
    item.forEach(single => {
        // you are adding tem and single
        if (single % 3 === 0) {
            temp = temp + single;
        }
    });
    // add the temp variable to the new list and once the loop restart the temp varialble is reset to zero
    new_king.push(temp)
});

console.log(new_king)