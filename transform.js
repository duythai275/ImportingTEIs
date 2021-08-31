const writejson = require("writejson");
const XLSX = require("XLSX");
const workbook = XLSX.readFile("./data.xlsx");
const data = XLSX.utils.sheet_to_json(workbook.Sheets[workbook.SheetNames[0]]);

let TETs = { trackedEntityInstances: [] }

data.forEach( row => {
    let attrs = [];

    if (row.systemID) attrs.push({
        attribute: "KSr2yTdu1AI",
        value: row.systemID
    })
    if (row.surname) attrs.push({
        attribute: "ENRjVGxVL6l",
        value: row.surname
    })
    if (row.firstName) attrs.push({
        attribute: "sB1IHYu2xQT",
        value: row.firstName
    })
    if (row.sex) attrs.push({
        attribute: "oindugucx72",
        value: row.sex
    })
    if (row.nationalID) attrs.push({
        attribute: "Ewi7FUfcHAD",
        value: row.nationalID
    })
    if (row.dateOfBirth) attrs.push({
        attribute: "NI0QRzJvQ0k",
        value: row.dateOfBirth
    })
    if (row.age) attrs.push({
        attribute: "r60066b1jof",
        value: row.age
    })
    if (row.homeAddress) attrs.push({
        attribute: "Xhdn49gUd52",
        value: row.homeAddress
    })
    if (row.homeDistrict) attrs.push({
        attribute: "Qwdm4CcIHqP",
        value: row.homeDistrict
    })
    if (row.homeResort) attrs.push({
        attribute: "taJ0IQcmpcX",
        value: row.homeResort
    })

    TETs.trackedEntityInstances.push({
        orgUnit: row.enrollingOrgunit,
        trackedEntityInstance: row.TEIuid,
        trackedEntityType: "MCPQUTHX1Ze",
        enrollments:[{
            orgUnit: row.enrollingOrgunit,
            program: "yDuAzyqYABS",
            enrollmentDate: row.registrationDate,
            incidentDate: row.registrationDate
        }],
        attributes: attrs
    });
});

writejson("./transformData/TEIs.json", TETs);