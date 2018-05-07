const fs = require("fs");
const path = require("path");

const isFile = file => {
  const stats = fs.lstatSync(file);
  return stats.isFile();
};

const getFileName = file => {
  const fileParts = file.split("/");
  return fileParts[fileParts.length - 1];
};

const crawl = (file, indentation) => {
  console.log(indentation + getFileName(file));

  if (isFile(file)) {
    // collect only files
  } else {
    const files = fs.readdirSync(file);
    files.forEach(subfile => {
      crawl(file + "/" + subfile, indentation + "\t");
    });
  }
};

const startingDirectory = "PATH_TO_YOUR_DIRECTORY";
crawl(startingDirectory, 0);
