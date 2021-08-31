// const XLSX = require("XLSX");
// const workbook = XLSX.readFile("./data.xlsx");
// const data = XLSX.utils.sheet_to_json(workbook.Sheets[workbook.SheetNames[0]]);

// let nationIDs = [];
// let systemIDs = [];

// const check = (value, arr) => {
//     return arr.find( e => e === value);
// }

// data.forEach( (tei, index) => {
//     if ( !check(tei.systemID, systemIDs) ) systemIDs.push(tei.systemID);
//     else console.log(`System ID: ${index}, ${tei.systemID}`);
// })

const sample = (d, fn = Math.random) => {
    if (d.length === 0) {
      return;
    }
    return d[Math.round(fn() * (d.length - 1))];
  };
  
const generateCode = (limit = 11, fn = Math.random) => {
    const allowedLetters = [
      "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    ].join("");
    const allowedChars = ["0123456789"].join("");
    const arr = [sample(allowedLetters),sample(allowedLetters)]; // sample 1 to make sure it starts with a letter
    for (let i = 0; i < 6; i++) {
      arr.push(sample(allowedChars));
    }
    return arr.join("");
};

for (let i = 0; i < 6; i++) {
    console.log(generateCode());
}