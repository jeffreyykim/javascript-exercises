const sumAll = function(floor, ceiling) {
    if (floor < 0 || ceiling < 0) {
        return "ERROR";
    }
    if (floor > ceiling) {
        [floor, ceiling] = [ceiling, floor];
    }
    if (!Number.isInteger(floor) ||  !Number.isInteger(ceiling)) {
        return "ERROR";
    }
    let summed = 0;
    for (let i = floor; i <= ceiling; i++) {
        summed += i;
    }
    return summed;

};

// Do not edit below this line
module.exports = sumAll;
