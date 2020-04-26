const fs = require("fs");

fs.rename("myNewFile2.txt", "myNewestFile2.txt", (err) => {
  if (err) throw err;
  console.log("File Renamed!");
});
