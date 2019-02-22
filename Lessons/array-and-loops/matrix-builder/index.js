function matrixBuilder(size){
	let matrix = [];
	for (var i=0; i<size; i++){
		let col = [];
		for (var j=0; j<size; j++){
			col.push(Math.floor(Math.random()*2 ));
		}
		matrix.push(col);
	}
	return matrix;
}

let passing_matrix = matrixBuilder(10);
let failing_matrix = [
    [1,3],
    [4,1]
]

function PassMatrixTest(arr) {
    let test = []
        arr.forEach(row => {
            row.forEach( item => {
                if ((item !== 1) && (item !== 0) ) {
                    test.push("Error")
                }
            }
        )
    });
    if (test.length >= 1) {
        return false
    }
    return true
}

console.log(passing_matrix)

console.log(PassMatrixTest(passing_matrix))

console.log(failing_matrix)

console.log(PassMatrixTest(failing_matrix))