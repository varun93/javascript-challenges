// simulating a async call
const asyncCall = async element => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(element % 2 === 0);
    }, 5000);
  });
};

const asyncFilter = async (array, callback) => {
  const data = await Promise.all(
    array.map(async element => {
      const predicate = await callback(element);
      return predicate ? element : undefined;
    })
  );

  return data.filter(item => item !== undefined);
};

// driver code
const input = [1, 2, 3, 4, 5, 6];

asyncFilter(input, asyncCall).then(response => {
  console.log(response);
});
