const fs = require("fs");

// adds text to end of file
// fs.appendFile("myNewFile3.txt", "The latest content!", (err) => {
//   if (err) throw err;
//   console.log("Updated!");
// });

// replaces file contents
fs.writeFile("myNewFile3.txt", "Totally new and fresh content!", (err) => {
  if (err) throw err;
  console.log("Replaced!");
});
