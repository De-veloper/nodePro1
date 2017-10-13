var fs = require('fs');
//create a new file
fs.writeFile('afile.txt', 'Hello content!', function (err) {
  if (err) throw err;
  console.log('Saved!');
});