/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    const n = board.length;

    const validate = array => {
        const t = {};
        for(const element of array) {
            if(element === '.') {
                continue;
            }
            if(element in t) {
                return false;
            }
            t[element] = true;
        }
        return true;
    };

    // row-wise
    for(let i = 0; i < n; ++i) {
        const p = board[i];
        if(!validate(p)) {
            console.log(1, p);
            return false;
        }
    }

    // column-wise
    for(let i = 0; i < n; ++i) {
        const p = board.map(x => x[i]);
        if(!validate(p)) {
            console.log(2, p);
            return false;
        }
    }

    // cell
    for(let i = 0; i < n; i += 3) {
        for(let j = 0; j < n; j += 3) {
            const p = board.filter((_, x) => x >= i && x < (i + 3));
            const q = p.flatMap(x => x.filter((_, y) => y >= j && y < (j + 3)));
            if(!validate(q)) {
                return false;
            }
        }
    }

    return true;
};
