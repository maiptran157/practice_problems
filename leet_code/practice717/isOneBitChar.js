var isOneBitCharacter = function (bits) {
    if (bits.length == 1) return true;
    return bits.join("").replace(/(11|10)/g, "x").slice(-1) != "x";
}

console.log(isOneBitCharacter([1, 0, 0]));
console.log(isOneBitCharacter([1, 1, 0, 0]));
console.log(isOneBitCharacter([1, 0, 1, 0]));
console.log(isOneBitCharacter([0, 0]));