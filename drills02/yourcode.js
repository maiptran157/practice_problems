

function countOccurences(words, repeatedWord) {
    let counter = 0;
    for (let i = 0; i < words.length; i++) {
        if (words[i] === repeatedWord) {
            counter++;
        }
    }
    return counter;
}

function wordLengths(words) {
    const lengthOfWords = [];
    words.forEach(word => lengthOfWords.push(word.length));
    return lengthOfWords;
}

function getMinMaxMean(nums) {
    return {
        min: Math.min(...nums),
        max: Math.max(...nums),
        mean: nums.reduce((a, b) => a + b, 0) / nums.length
    };

}

function findMode(nums) {
    const frequency = {};
    nums.forEach(num => {
        if (!frequency[num]) {
            frequency[num] = 1;
        } else {
            frequency[num]++
        }
    });
    const sortable = [];
    for (let key in frequency) {
        sortable.push([key, frequency[key]]);
    }
    sortable.sort((a, b) => a[1] - b[1]);
    const lastIndex = sortable.length - 1;
    return sortable[lastIndex][1] === sortable[lastIndex - 1][1] ? parseFloat(sortable[lastIndex - 1][0]) : parseFloat(sortable[lastIndex][0]);
}
