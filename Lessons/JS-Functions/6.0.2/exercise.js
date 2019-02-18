function charCounter(paragraph) {
    arr = paragraph.toLowerCase().split("")
    let counts = {}
    arr.forEach(char => {
        count = paragraph.split(char).length-1
        counts[char] = count
    });
    return counts;
}

let par = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eget bibendum turpis. Curabitur scelerisque eros ultricies, venenatis mi at, tempor nisl. Integer tincidunt accumsan cursus."


console.log(charCounter(par));