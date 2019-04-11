let today = new Date();
let yyyy = today.getFullYear();

const isLeapYear = ( year ) => (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);

let years = [];
for (let year = 1990; year < yyyy+1; year++) {
    years.push(year);
};

const leap_years = years.filter(year => isLeapYear(year));
console.log(leap_years);

// let leap_years = [];
// for (let year = 1990; year < yyyy+1; year++) {
//     if (isLeapYear(year)) {
//         leap_years.push(year);  
//     };
// };

// console.log(leap_years);