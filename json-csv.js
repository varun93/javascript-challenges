const getSchema = data => {
  const schema = [];

  if (Array.isArray(data)) {
    data.forEach(row => {
      Object.keys(row).forEach(key => {
        if (schema.indexOf(key) === -1) {
          schema.push(key);
        }
      });
    });
  }

  return schema;
};

const generateResultSet = (data, schema) => {
  const resultSet = [];

  data.forEach(row => {
    const resultRow = [];

    schema.forEach(key => {
      resultRow.push(row[key] || "");
    });

    resultSet.push(resultRow);
  });

  return resultSet;
};

// how to deal with nested structures
const data = [
  {
    code: 1234,
    name: "abcd"
  },
  {
    code: 5678,
    name: "pqrs"
  }
];

const schema = getSchema(data);
const resultSet = generateResultSet(data, schema);
console.log(resultSet);
