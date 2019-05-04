/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function(moves) {
    let x = 0;
    let y = 0;
    moves.split('').map((e) => {
        switch(e) {
            case 'U': {
                ++y;
                break;
            }
            case 'D': {
                --y;
                break;
            }
            case 'L': {
                --x;
                break;
            }
            case 'R': {
                ++x;
                break;
            }
        }
    });
    return x === 0 && y === 0;
};
