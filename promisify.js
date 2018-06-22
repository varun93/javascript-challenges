const promisify = callback => arguments => {
  return new Promise((resolve, reject) => {
    callback.apply(null, [
      ...arguments,
      (err, data) => {
        if (err) {
          return reject(err);
        }
        resolve(data);
      }
    ]);
  });
};

/**
 * Usage
 * 
 const readFileAsArray = async (file) => {
  try {
    const readFile = promisify(fs.readFile);
    const data = await readFile([file]);
    const lines = data
      .toString()
      .trim()
      .split("\n");
      return lines;
    } catch (error) {
    cb(null, error);
  }
};

 */
