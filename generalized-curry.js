const curry = (fn) => {
    if (fn.length === 0) {
        return fn;
    }
    const nest = (args) => {
        return (...ags) => {
            args.push(...ags);
            return args.length === fn.length ? fn(...args) : nest(args);
        }
    };
    return nest([]);
}

