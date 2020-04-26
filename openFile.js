const fs = require("fs");

fs.open("myNewFile2.txt", "w", (err, file) => {
  if (err) throw err;
  console.log("Saved!");
});
