const fs = require("fs");

fs.writeFile("renameFiles.js", "Rename stuff here", (err) => {
  if (err) throw err;
  console.log("saved!");
});
