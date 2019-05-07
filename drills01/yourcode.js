
function sumArray(arrayOfNum) {
    let total = 0;
    for (let i = 0; i < arrayOfNum.length; i++) {
        total += arrayOfNum[i];
    }
    return total;
}

function fitWithinVal(nums, targetSum) {
    const numsList = [];
    for (let i = 0; i < nums.length; i++) {
        if (targetSum - nums[i] >= 0) {
            numsList.push(nums[i]);
            targetSum = targetSum - nums[i];
        }
    }
    return numsList;
}

function getAllNamesShorterThan(names, targetLength) {
    const qualifiedtNameList = [];
    for (let i = 0; i < names.length; i++) {
        if (names[i].length < targetLength) qualifiedtNameList.push(names[i])
    }
    return qualifiedtNameList;
}

function makeLabel(inputObj) {
    return `${inputObj["greeting"]} ${inputObj["givenName"]} ${inputObj["familyName"]}\n${inputObj["home address"]["streetNumber"]} ${inputObj["home address"]["streetName"]}\n${inputObj["home address"]["city"]}, ${inputObj["home address"]["state"]} ${inputObj["home address"]["zip"]}`;
}
