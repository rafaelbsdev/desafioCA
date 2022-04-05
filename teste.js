// Essa foi a forma 1 que pensei.
const fs = require('fs');

const list = fs.readFileSync('./input.csv', 'utf-8');

function csvJSON(csv) {
  const lines = csv.split('\r\n');
  const result = [];
  const headers = lines[0].split(',');

  for (let i = 1; i < lines.length; i++) {
    const obj = {};
    const currentline = lines[i].split(',');

    for (let j = 0; j < headers.length; j++) {
      obj[headers[j]] = currentline[j];
    }

    result.push(obj);
  }

  const finalJSON = fs.writeFile('output.json', JSON.stringify(result), (err) => err);

  return finalJSON;
}

csvJSON(list);
