const fs = require("fs");

const stuff = "Stuff";

fs.appendFile("myJSFile.js", stuff, function (err) {
  if (err) throw err;
  console.log("Saved!");
});
