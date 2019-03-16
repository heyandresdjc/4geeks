const main = () => {
    let holder = [];
    for (let index = 0; index < 26; index++) {
        if (index % 2 !== 0) {
            holder.push(index);
        }
    }
    return holder;
}

console.log(main());