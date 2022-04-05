// Essa é uma versão que fiz usando bibliotecas externas que entregam de maneira fácil.
const CSVToJSON = require('csvtojson');
const fs = require('fs');

CSVToJSON().fromFile('input.csv').then((output) => {
  fs.writeFile('output.json', JSON.stringify(output, null, 4), (err) => {
    if (err) {
      throw err;
    }
  });
}).catch((err) => {
  console.log(err);
});
