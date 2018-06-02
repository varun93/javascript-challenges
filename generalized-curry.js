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


/*
Alternate Solution
const curry = (fn) => {
    return (...ags) => {
        if (ags.length === 0) {
            throw Error('No Arguments Supplied');
        }
        if (ags.length >= fn.length) {
            return fn(...ags);
        }
        return curry(fn.bind(null, ...ags));
    };
}
Why does this work?
https://stackoverflow.com/questions/50616087/generalised-curry-javascript 
*/
