var removeElement1 = function (nums, val) {
    while (nums.includes(val)) {
        nums.splice(nums.indexOf(val), 1)
    }
    return nums.length;
};

var removeElement2 = function (nums, val) {
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] == val) {
            nums.splice(i, 1);
            i = i - 1;
        }
    }
    return nums.length;
};