// Original list where you are pulling the data from
king_of_list = [
    [1,2,3,4,5,6,7,8,9,10,11,23,45,67,88,99,87,66,55,4,33,3],
    [1,2,3,4,5,6,7,8,9,10,11,23,45,67,88,99,87,66,55,4,33,3],
    [1,2,3,4,5,6,7,8,9,10,11,23,45,67,88,99,87,66,55,4,33,3],
    [1,2,3,4,5,6,7,8,9,10,11,23,45,67,88,99,87,66,55,4,33,3],
    [1,2,3,4,5,6,7,8,9,10,11,23,45,67,88,99,87,66,55,4,33,3]
]

// // new list you are creating from the king_of_list
// new_king = []

// loop each list separtly
let new_kin = king_of_list.forEach(item => {
    console.log(item);
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

// prints the final result
console.log(new_king)

let king_kunta = king_of_list.map(
    function(item) {
        return item
    }
)
console.log(king_kunta)
// now king_kunta and king_of_list have the same values yet they are two different arrays of arrays

// function print_index(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         console.log(i)
//     }
// }

// print_index(fruits);

// function print_item_in_list(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         console.log(arr[i])
//     }
// }

// print_item_in_list(fruits);

// function for_each(arr) {
//     arr.forEach(item => {
//         console.log(item)
//     });
// }

// for_each(fruits);