const compose = (...fns) => (input) => {
    return fns.reduce((result,fn) => fn(result),input);
}

const toLowerCase = (input) => {
	return input.toLowerCase();
}

const removeSpaces = (input) => {
	return input.replace(/\s+/,"");
}

const input = "Varun Hegde";

console.log(compose(toLowerCase,removeSpaces)(input));
