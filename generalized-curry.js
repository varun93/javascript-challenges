const curry = (fn, args = []) => {
    if (fn.length === 0) {
        return fn;
    }

    return (...ags) => {
        args.push(...ags);
        if (args.length === fn.length) {
            return fn(...args);
        }
        else {
            return curry(fn, args);
        }
    };
}

// final function
const sum = curry((x, y, z, a, b) => {
    return x + y + z + a + b;
}, []);

const total = sum(1)(2)(3)(4, 5);
console.log(total);
