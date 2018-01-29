const fs = require("fs");

const promisifyReaddir = path => {
  return new Promise((resolve, reject) => {
    fs.readdir(path, (error, data) => {
      if (error) {
        reject(error);
      } else {
        resolve(data);
      }
    });
  });
};

const promisifyStat = path => {
  return new Promise((resolve, reject) => {
    fs.lstat(path, (error, data) => {
      if (error) {
        reject(error);
      } else {
        resolve(data);
      }
    });
  });
};

const filterDirectories = async paths => {
  const stats = await Promise.all(
    paths.map(async path => {
      const stat = await promisifyStat(path);
      const isDirectory = stat.isDirectory();
      return isDirectory ? path : undefined;
    })
  );
  return stats.filter(path => path !== undefined);
};

const iterateDirectoryAsync = async directoryPath => {
  let paths = await promisifyReaddir(directoryPath);

  paths = paths.map(path => `${directoryPath}/${path}`);

  const directories = await filterDirectories(paths);

  const files = paths.filter(path => directories.indexOf(path) === -1);

  storedFiles = storedFiles.concat(files);

  await Promise.all(
    directories.map(directory => iterateDirectoryAsync(directory))
  );
};

const basePath = "DIRECTORY START PATH";
let storedFiles = [];

iterateDirectoryAsync(basePath).then(() => {
  console.log(storedFiles);
});
