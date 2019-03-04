var removeDuplicates = function (nums) {
    for (var i = 1; i < nums.length; i++) {
        indexBef = i - 1;
        if (nums[i] == nums[indexBef]) {
            nums.splice(i, 1);
            i = i - 1;
        }
    }
    return nums.length;
};