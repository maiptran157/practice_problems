var addToArrayForm = function (A, K) {
    console.log("K:", K);
    var AtoNum = K;
    console.log(AtoNum);
    console.log(A.length);
    var numToMultiply = parseInt("1" + "0".repeat(A.length - 1));
    for (var i = 0; i < A.length; i++) {
        AtoNum += (A[i] * numToMultiply);
        console.log(`AtoNum = ${AtoNum} + ${A[i]} * ${numToMultiply}`);
        console.log("AtoNum = ", AtoNum);
        numToMultiply = numToMultiply / 10;
    }
    const resultInNum = AtoNum;
    console.log("AtoNum:", AtoNum);
    console.log("resultInNum:", resultInNum);
    return resultInNum.toString().split("");
};

addToArrayForm([1, 2, 6, 3, 0, 7, 1, 7, 1, 9, 7, 5, 6, 6, 4, 4, 0, 0, 6, 3], 516)