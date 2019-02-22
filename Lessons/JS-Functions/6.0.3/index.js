function isOdd(num) {
    if (num % 2 === 0) return false
    return true
}

function isEven(num) {
    if (num % 2 === 0) return true
    return false
}

function isPrime(num) {
    for(var i = 2; i < num; i++)
      if(num % i === 0) return false;
    return num > 1;
  }

function NumCheck(arr) {
    prime_num = []
    even_num = []
    odd_num = []

    arr.forEach(num => {
        if (isPrime(num)) {
            prime_num.push(num)
        } else if (isOdd(num)){
            odd_num.push(num)
        } else if(isEven(num)){
            even_num.push(num)
        }
    });

    return( { "odd": odd_num, "even": even_num, "prime": prime_num } )
}

num_check = []
for (let index = 1; index < 101; index++) {
    num_check.push(index);
}

console.log(NumCheck(num_check));

// let expectation = JSON.stringify(
//     { odd: [ 1, 9, 15, 21, 25, 27, 33, 35, 39, 45, 49, 51, 55, 57, 63, 65, 69, 75, 77, 81, 85, 87, 91, 93, 95, 99 ],
//     even: [ 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40, 42, 44, 46, 48, 50, 52, 54, 56, 58, 60, 62, 64, 66, 68, 70, 72, 74, 76, 78, 80, 82, 84, 86, 88, 90, 92, 94, 96, 98, 100 ],
//    prime: [ 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97 ] })

//    if (expectation === JSON.stringify(num)) {
//        console.log("YAY")
//    } else {
//        console.log("Nope")
//    }