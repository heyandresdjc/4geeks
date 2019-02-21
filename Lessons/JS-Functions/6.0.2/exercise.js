function charCounter(paragraph) {
    arr = paragraph.toLowerCase().split("");
    let counts = {};
    arr.forEach(char => {
        if (char !== " ") {
            count = paragraph.split(char).length-1;
            counts[char]=count;
        }
    });
    console.log(typeof counts)
    return counts;
}

let par = "Lorem ipsum dolor sit amet consectetur adipiscing elit Curabitur eget bibendum turpis Curabitur scelerisque eros ultricies venenatis mi at tempor nisl Integer tincidunt accumsan cursus";

let x = { l: 5, o: 6, r: 14, e: 18, m: 7, i: 18, p: 4, s: 14, u: 14, d: 4, t: 16, a: 8, c: 9, n: 10, g: 3, b: 4, q: 1, v: 1 };
r = charCounter(par);

expected = JSON.stringify(x);
result = JSON.stringify(r);

if (expected === result) {
    console.log("YAY");
} else {
    console.log("Nope");
    console.log("Your output",r, "but we wanted was", x);
    console.log("Your output was of type",typeof r, "but we wanted was of type", typeof x);
}