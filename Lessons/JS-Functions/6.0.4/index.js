
const matrixBuilder = (n) => {
    matrix = []

    for (let index = 0; index < n;index++) {
        row = []
        for (let index = 0; index < n; index++) {
            let randomNumber = Math.round(Math.random());
            row.push(randomNumber);
        }
        matrix.push(row)
    }
    return matrix;
}


console.log(matrixBuilder(20))
