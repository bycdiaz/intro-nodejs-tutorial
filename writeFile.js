const fs = require("fs");

fs.writeFile("myNewFile3.txt", "hello content!", (err) => {
  if (err) throw err;
  console.log("saved!");
});
