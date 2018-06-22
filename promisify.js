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

module.exports = promisify;
