const RouteVerification = (walk , time) =>{
    let x = 0
    let y = 0
    if ((walk.length % 2 !== 0) && (time % 2 !== 0)) {
        return false
    }
    walk.forEach(step => {
        switch (step) {
            case 'n':
                y++
                break;
            case 's':
                y--
                break;
            case 'e':
                x++
                break;
            case 'w':
                x--
                break;
        }
    });
    if ((x === 0) && (y === 0)) {
        return true
    }
}

let test_array1 = ['n', 's']
let test_array2 = ['s', 's']

if (RouteVerification(test_array1)) {
    console.log("YAY")
} else {
    console.log("Nope")
}

if (RouteVerification(test_array2)) {
    console.log("YAY")
} else {
    console.log("Nope")
}

// test
const MapCreator = (num) => {
    let i = 0;
    let map_return = [];
    while (i < num) {
        let possible_directions = ['n','s','w','e'];
        let position = Math.floor(Math.random()*possible_directions.length);
        map_return.push(possible_directions[position])
        i++
    };
    let return_map = []
    for (let index = 0; index < map_return.length; index++) {
        const step = array[index];
        switch (step) {
            case 'n':
                return_map.push('s');
                break;
            case 's':
                return_map.push('n');
                break;
            case 'e':
                return_map.push('w');
                break;
            case 'w':
                return_map.push('e');
                break;
        }
    }
    
};
