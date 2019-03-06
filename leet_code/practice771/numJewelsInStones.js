var numJewelsInStones = function (J, S) {
    var uniJewlArr = J.split("");
    var stoneArr = S.split("");
    var counter = 0;
    for (var j = 0; j < uniJewlArr.length; j++) {
        for (var i = 0; i < stoneArr.length; i++) {
            if (uniJewlArr[j] === stoneArr[i]) {
                counter++;
                stoneArr.splice(i, 1);
                i = i - 1;
            }
        }
    }
    return counter;
};