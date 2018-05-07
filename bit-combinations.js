const printBinary = (n, result) => {
   if (n === 0) {
        console.log(result)
    }
    else {
        result = result.concat(0);
        printBinary(n - 1, result);
        // unchoose 0; and choose 1
        result = result.slice(0, result.length - 1);
        result = result.concat(1);
        printBinary(n - 1, result);
    }
}

printBinary(3, []);
