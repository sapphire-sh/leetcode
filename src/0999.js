/**
 * @param {character[][]} board
 * @return {number}
 */
var numRookCaptures = function(board) {
    let x = -1;
    let y = -1;
    let p = [];
    for(let i = 0; i < 8; ++i) {
        for(let j = 0; j < 8; ++j) {
            const c = board[j][i];
            switch(c) {
                case 'R': {
                    x = j;
                    y = i;
                    break;
                }
                case 'p': {
                    p.push({
                        'x': j, 'y': i,
                    });
                }
            }
        }
    }
    p = p.filter((p) => {
        return p.x === x || p.y === y;
    });
    if(p.length === 0) {
        return 0;
    }
    let count = 0;
    const dirs = [
        [0, -1],
        [0, 1],
        [-1, 0],
        [1, 0],
    ];
    dirs.forEach((dir) => {
        let _x = x + dir[0];
        let _y = y + dir[1];
        while((-1 < _x && _x < 8) && (-1 < _y && _y < 8)) {
            const c = board[_x][_y];
            if(c === 'B') {
                break;
            }
            if(c === 'p') {
                ++count;
                break;
            }
            _x += dir[0];
            _y += dir[1];
        }
    });
    return count;
};
