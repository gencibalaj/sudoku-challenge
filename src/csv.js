const fs = require('fs');
const CsvReadableStream = require('csv-reader');

function readCSV(filename) {
    const data = [];
    const inputStream = fs.createReadStream(filename, 'utf-8');
    return new Promise((resolve, reject) => {
        inputStream
            .pipe(
                new CsvReadableStream({ parseNumbers: true, parseBooleans: true, trim: true })
            )
            .on("data", (row) => {
                data.push(row);
            })
            .on('close', () => {
                resolve(data);
            })
    });
}

module.exports.readCSV = readCSV;