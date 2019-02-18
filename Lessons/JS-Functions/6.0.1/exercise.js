function stairs(num_of_steps) {
    let flight_of_stairs=""
    for (let index = 1; index < num_of_steps; index++) {
        let stair = "*".repeat(index)
        flight_of_stairs += stair + "\n"
    }
    return flight_of_stairs
}


console.log(stairs(5))