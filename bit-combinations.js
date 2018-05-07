const printBinary = (n, result) => {
    if (n === 0) {
        console.log(result)
    }
    else {
        printBinary(n - 1, result.concat(0));
        printBinary(n - 1, result.concat(1));
    }
}

printBinary(2, []);
