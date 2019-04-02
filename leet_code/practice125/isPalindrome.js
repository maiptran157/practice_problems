/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    s = s.split(/[^\w\*]+/gm).join("").toLowerCase();
    var sReverse = s.split("").reverse().join("");
    if (s === sReverse) return true;
    return false;
};