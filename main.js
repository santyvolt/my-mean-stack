var https = require("https");
var options = {
    host: "global.xirsys.net",
    path: "/_turn/santyvolt",
    method: "PUT",
    headers: {
        "Authorization": "Basic " + new Buffer("santyvolt:c75e3a58-8394-11e7-a022-a55fff4bf5d5").toString("base64")
    }
};
var httpreq = https.request(options, function (httpres) {
    var str = "";
    httpres.on("data", function (data) {
        str += data;
    });
    httpres.on("error", function (e) {
        console.log("error: ", e);
    });
    httpres.on("end", function () {
        console.log("ICE List: ", str);
    });
});
httpreq.end();