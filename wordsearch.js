// function to get vertical array elements from an array of arrays
const transpose = function(matrix) {
    let arrayOfArrays = [];
    let i = 0;

    for (let rowIndex = 0; rowIndex < matrix[0].length; rowIndex++) {
        i = rowIndex;
        const array = [];
        arrayOfArrays.push(array);
        for (let row = 0; row < matrix.length; row++) {
            array.push(matrix[row][i]);
        }
    }
    return arrayOfArrays;
};

const wordSearch = (letters, word) => {
    // looking for words horizontally on letters array
    const horizontalJoin = letters.map(ls => ls.join(''));

    for (const l of horizontalJoin) {
        if (l.includes(word)) {
            return true;
        }
    }
    // looking for words vertically on the letters array
    const verticalJoin = transpose(letters).map(ls => ls.join(''));

    for (const l of verticalJoin) {
        if (l.includes(word)) {
            return true;
        }
    }
    return false;
};

module.exports = wordSearch;