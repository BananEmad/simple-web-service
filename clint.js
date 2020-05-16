"use strict";

var soap = require("soap");
var url = "http://localhost:8000/wsdl?wsdl";

soap.createClient(url, function (err, client) {
  client.getStudents(null, function (err, result) {
    console.log(client.describe());
    console.log(result);
  });
});
