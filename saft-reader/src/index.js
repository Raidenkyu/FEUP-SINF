const saft = require('../files/json/saft-demo1');

startUp();

function startUp () {
    console.log("Saft Version:", saft.jsonObj.AuditFile.Header.AuditFileVersion);
}

