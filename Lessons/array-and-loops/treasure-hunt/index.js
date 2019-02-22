const quadrant = (limiter, key) =>{
    switch (key) {
        case key:
            return "N"
            break;
        case key:
            return "E"
            break;
        case key:
            return "W"
            break;
        case key:
            return "S"
            break;
        }
}

const Locator = (arr_of_arr, long, lat) => {
    console.log(arr_of_arr.length);
    return arr_of_arr[long][lat];
}

treasure_map = [ 
    [ 1, 1, 0, 1, 0, 0, 0, 0, 0, 0 ],
    [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ],
    [ 1, 1, 0, 1, 1, 1, 1, 1, 1, 1 ],
    [ 1, 1, 1, 1, 1, 0, 1, 1, 1, 0 ],
    [ 1, 1, 0, 1, 1, 1, 0, 0, 0, 0 ],
    [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ],
    [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
    [ 1, 1, 1, 1, 0, 1, 0, 0, 0, 0 ],
    [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ],
    [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ] 
];

console.log(Locator(treasure_map, 3, 1));