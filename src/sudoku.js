class Sudoku {
    constructor(data) {
        this.data = data;
    }
    static rowNumber = 9; 

    isValid() {
        for (let i = 0; i < 9; i++) {
            let row = this._getRow(i);
            if (!this.isElementValid(row)) {
                return false
            };

            let col = this._getCol(i);
            if (!this.isElementValid(col)) {
                return false
            };

            let block = this._getBlock(i);
            if (!this.isElementValid(block)) {
                
                return false
            };
        }

        return true;
    }

    _getBlock(i) {
        if (i < 0 || i > (this.rowNumber-1)) throw new Error("Invalid row index");
        let x = i * 3 % 9;
        let y = Math.floor(i / 3) * 3
        let result = [];
        for (let j = x; j < x + 3; j++) {
            for (let k = y; k < y + 3; k++) {
                result.push(this.data[j][k]);
            }
        }
        return result;

    }

    _getRow(i) {
        if (i < 0 || i > (this.rowNumber-1)) throw new Error("Invalid row index");
        return this.data[i]
    }

    _getCol(i) {
        if (i < 0 || i > (this.rowNumber-1)) throw new Error("Invalid row index");
        let col = this.data.map((value, index) => { return value[i] });
        return col;
    }

    isElementValid(data) {
        let sum = 0;
        for (let i = 0; i < data.length; i++) {
            const isValidRange = data[i] > 0 && data[i] < 10;
            const isDuplicated = data.indexOf(data[i]) !== i;
            if (!isValidRange || isDuplicated) {
                return false;
            }
            sum += data[i];
        }

        return sum === 45;

    }
}

module.exports.Sudoku = Sudoku;
