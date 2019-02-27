function sayHello(inputStr, inputObj) {
    var keyName = Object.keys(inputObj);
    var outputStr = inputStr;
    for (var i = 0; i < keyName.length; i++) {
        outputStr = outputStr.split("${" + keyName[i] + "}").join(inputObj[keyName[i]]);
    }
    // console.log(outputStr);
    return outputStr;
}

sayHello("Hello ${name1}. My name is ${name2}.", { name1: "Bob", name2: "Jon" })