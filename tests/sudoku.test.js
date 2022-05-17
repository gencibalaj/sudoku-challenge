const { Sudoku } = require("../src/sudoku");
const path = require('path');
const { readCSV } = require('../src/csv');

const testFiles = [
    { name: "basicGrid", expected: true },
    { name: "basicGrid2", expected: true },
    { name: "columnError", expected: false },
    { name: "outOfRangeError", expected: false },
    { name: "outOfRangeError2", expected: false },
    { name: "rowError", expected: false },
    { name: "rubbishError", expected: false },
    { name: "subGridError", expected: false },
    { name: "sumValidationError", expected: false },
];

for (let { name, expected } of testFiles) {
    test(`${name} case`, async () => {
        const matrix = await readCSV(path.resolve(__dirname, `../csv/${name}.csv`));
        const sudoku = new Sudoku(matrix);
        expect(sudoku.isValid()).toBe(expected);
    });
}