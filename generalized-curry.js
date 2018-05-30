const curry = (fn) => {
    if (fn.length === 0) {
        return fn;
    }
    const args = [];
    const nest = () => {
        return (...ags) => {
            args.push(...ags);
            return args.length === fn.length ? fn(...args) : nest();
        }
    };
    return nest();
}

// final function
const sum = curry((x, y, z, a, b) => {
    return x + y + z + a + b;
});

const total = sum(1)(2)(3)(4, 5);
console.log(total);
