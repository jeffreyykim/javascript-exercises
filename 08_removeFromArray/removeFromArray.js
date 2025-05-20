const removeFromArray = function(array, ...args) {
    const final = array.filter(item => !args.includes(item));
    return final;
};

// Do not edit below this line
module.exports = removeFromArray;
