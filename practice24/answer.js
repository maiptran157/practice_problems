function maxtrix_add(array1, array2) {
    var computable = true;
    if (array1.length === array2.length) {
        for (var i = 0; i < array1.length; i++) {
            if (array1[i].length !== array2[i].length) {
                computable = false;
            }
        }
        if (!computable) {
            return 'Arrays are not of equal length.';
        }
        var outputArray = [];
        for (var i = 0; i < array1.length; i++) {

            outputArray[i] = [];

            for (var j = 0; j < array1[i].length; j++) {

                outputArray[i][j] = array1[i][j] + array2[i][j];
            }
        }
        return outputArray;
    }
}

console.log(maxtrix_add([[1, 2, 3], [3, 4, 5], [6, 7, 8]], [[1, 2, 3], [1, 2, 3], [1, 2, 3]]))