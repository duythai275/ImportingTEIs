const options = require("./optionSets.json");

const XLSX = require("XLSX");
const workbook = XLSX.readFile("./data.xlsx");
const data = XLSX.utils.sheet_to_json(workbook.Sheets[workbook.SheetNames[0]]);

let districts = [];
let resorts = [];

data.forEach( tei => {
    let flags = [ false, false ];
    districts.forEach( district => {
        if ( district === tei.homeDistrict ) flags[0] = true;
    });
    resorts.forEach( resort => {
        if ( resort === tei.homeResort ) flags[1] = true;
    });
    if ( !flags[0] ) districts.push(tei.homeDistrict);
    if ( !flags[1] ) resorts.push(tei.homeResort);
});

console.log("District");
districts.forEach( district => {
    let flag = false
    options.optionSets[0].options.forEach( option => {
        if ( district === option.code ) flag = true;
    });
    if ( !flag ) console.log(district)
})

console.log("Resort");
resorts.forEach( resort => {
    let flag = false
    options.optionSets[1].options.forEach( option => {
        if ( resort === option.code ) flag = true;
    });
    if ( !flag ) console.log(resort)
})