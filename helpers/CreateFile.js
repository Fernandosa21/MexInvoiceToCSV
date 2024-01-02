const fs = require('fs')

const createFile = (text, fileName) => {
    var stream = fs.createWriteStream(fileName);
    stream.once('open', function (fd) {
        stream.write(text);
        stream.end();
    });
}

module.exports = createFile;