const writejson = require("writejson");

const data = require("./transformData/TEIs.json");
const limit = 100;
let times = 0;

do {
    writejson(
        `./chunking/TEIs${times}.json`, 
        { trackedEntityInstances: data.trackedEntityInstances.slice(limit * times,(limit * times) + limit) }
    );
    times++;
}
while ( limit * times < data.trackedEntityInstances.length )

// const data = require("./data/TEIs.json");
// writejson("./importing/errorTEIs.json", { trackedEntityInstances: data.trackedEntityInstances.slice(0,500) });
// writejson("./importing/TEIs.json", { trackedEntityInstances: data.trackedEntityInstances.slice(501) });