const axios = require('axios');
const writejson = require("writejson");

const importing = async () => {
    let file = 500;
    let success = [];
    let errors = [];

    while ( file < 565 ) {
        let data = require(`./chunking/TEIs${file}.json`);
        await axios({
            method: 'post',
            url: 'https://academy.demos.dhis2.org/suriname2/api/trackedEntityInstances',
            headers: { 
                'Authorization': 'Basic dGhhaTpEaXN0cmljdDEj', 
                'Content-Type': 'application/json'
            },
            data : JSON.stringify(data)
        })
        .then(function (response) {
            console.log(response);
            success.push(file);
            console.log(file);
        })
        .catch(function (error) {
            console.log(error);
            errors.push({file: file, error: error});
            console.log("err: "+file);
        });
        file++;
    }

    
    writejson("./result/output4.json", { success: success, errors: errors });
}

importing();