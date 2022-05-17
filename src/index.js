const path = require('path');
const { readCSV } = require('../src/csv');

(async () => {
    const data = await readCSV(path.resolve(__dirname, "../csv/basicGrid.csv"));
    console.log(data);
})()
