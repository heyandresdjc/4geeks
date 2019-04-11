// Model Solution, this is a liners not good practice to try and do this all the time but they are cool.
const NickNameMaker = (name) => {
    if (name.length >= 3) {
        return name.split("")[0]+name.split("")[1]+name.split("")[2];
    };
}

console.log(NickNameMaker("Andres"));
