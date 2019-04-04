function fibonacci(num) {
    var a = 1, b = 0, temp;

    while (num >= 0) {
        temp = a;
        console.log("temp:", temp);
        a = a + b;
        console.log("a:", a);
        b = temp;
        console.log("b:", b);
        num--;
        console.log("num:", num);
    }

    return b;
}

console.log(fibonacci(9));