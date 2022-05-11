
const fs = require("fs");
var request = require("request");

function downloadFile(uri, filename, callback) {
    var stream = fs.createWriteStream(filename);
    request(uri).pipe(stream).on('close', callback);
}

module.exports = downloadFile