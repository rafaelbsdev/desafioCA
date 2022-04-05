// Forma dois e acredito ter sido a mais completa pois o readline é bem útil e versátil.
const readline = require('readline');
const fs = require('fs');

const readable = fs.createReadStream('input.csv');

const rl = readline.createInterface({
  input: readable,
});

let i = 0;
let headers;
const json = [];
rl.on('line', (line) => {
  if (i === 0) {
    headers = line.split(',');
    headers = headers.map((item) => {
      item = item.replace(/"/g, '');
      item = item.replace(/'/g, '');
      item = item.replace(/ /g, '');
      return item;
    });
    i += 1;
  } else {
    const arr = line.split(',');
    const item = {};
    headers.forEach((key, index) => {
      item[key] = arr[index].toString();
    });
    json.push(item);
  }
}).on('close', () => {
  fs.writeFile('output.json', JSON.stringify(json), (err) => {
    if (err) {
      console.log('LOG', err);
    } else {
      console.log('Output criado!');
    }
  });
});
