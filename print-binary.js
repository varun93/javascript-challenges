	const toBinaryRecursive = (num) => {
		return num < 2 ? num + "" : toBinaryRecursive(num >> 1) + num % 2;
	}
