const posSeq = (numArr) => {
    if (numArr[numArr.length - 1] > 0) {
        numArr.push(-1);
    }
    var currentIndex = null;
    var postiveSeq = [];
    var longestPosSeq = [];
    for (var i = 0; i < numArr.length; i++) {
        if (numArr[i] < 0) {
            if (longestPosSeq.length < postiveSeq.length) {
                longestPosSeq = postiveSeq;
                currentIndex = i - longestPosSeq.length;
            }
            postiveSeq = [];
        } else {
            postiveSeq.push(numArr[i]);
        }
    }
    return `currentIndex = ${currentIndex}. Length of positive sequence = ${longestPosSeq.length}`;
}

posSeq([1, 2, -3, 2, 3, 4, -6, 1, 2, 3, 4, 5, -8, 5, 6]);