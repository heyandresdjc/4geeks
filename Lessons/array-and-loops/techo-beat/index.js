const LyricsGenerator = (array) => {
    let lyrics = []
    let ones= 0;
    array.forEach(element => {
        switch (element) {
            case 0:
                lyrics.push("Boom")
                break;
            case 1:
                lyrics.push("Drop the base")
                ones++
                break;
        }

        switch (ones) {
            case 3:
                lyrics.push("!!!Break the base!!!");
                ones = 0;
                break;
        }
    });
    return lyrics.join(" ")
}

console.log(LyricsGenerator([0,0,1,1,0,0,0]))
console.log(LyricsGenerator([0,0,1,1,1,0,0,0]))
console.log(LyricsGenerator([0,0,0]))
console.log(LyricsGenerator([1,0,1]))
console.log(LyricsGenerator([1,1,1]))