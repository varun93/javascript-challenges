	const toBinaryRecursive = (num) => {
		return num < 2 ? num + "" : toBinaryRecursive(num >> 1) + num % 2;
	}

	const toBinary = (num) => {

		let bits = [], mask = 1;

		while (mask <= num) {
			bits.unshift(num & mask ? 1 : 0);
			mask <<= 1;
		}
		return bits.join("");
	}
