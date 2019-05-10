

function getPath(pathStr) {
    return pathStr.split("/");
}

function getPathParts(urlStr) {
    const urlArr = urlStr.split(/[\/\/]|[\/]|[:]/g);
    urlArr.splice(urlArr.indexOf(""), 2);
    const urlObj = {
        protocol: urlArr[0],
        host: urlArr[1],
        port: parseFloat(urlArr[2]),
        path: [],
        file: urlArr[urlArr.length - 1]
    }
    for (let i = 3; i < urlArr.length - 1; i++) {
        urlObj.path.push(urlArr[i])
    }
    urlObj.path = urlObj.path.join("/");
    return urlObj;
}

function getCapitalCount(words) {
    let counter = 0;
    words.forEach(word => {
        if (word[0] === word[0].toUpperCase()) {
            counter++;
        }
    });
    return counter;
}

function correctCalcChecker(mathArr) {
    const correctResults = [];
    mathArr.forEach(obj => {
        if (doMath(obj.num1, obj.num2, obj.op) === obj.result) {
            correctResults.push(obj);
        }
    })
    return correctResults;
}

function doMath(num1, num2, op) {
    switch (op) {
        case "+":
            return num1 + num2;
            break;
        case "-":
            return num1 - num2;
            break;
        case "*":
            return num1 * num2;
        default:
            return num1 / num2;
    }
}
