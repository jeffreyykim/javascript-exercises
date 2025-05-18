const reverseString = function(string) {
    let splitWord = string.split("");
    let reversedArray = splitWord.reverse();
    let reversedWord = reversedArray.join("");;

    return reversedWord;

};

// Do not edit below this line
module.exports = reverseString;
