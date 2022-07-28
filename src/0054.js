/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    const p = matrix.length * matrix[0].length;
    const q = [matrix[0][0]];
    matrix[0][0] = '';

    const directions = [
        [1, 0],
        [0, -1],
        [-1, 0],
        [0, 1],
    ];

    const fn = (x, y, i) => {
        if(q.length === p) {
            return;
        }

        const x1 = x + directions[i][0];
        const y1 = y + directions[i][1];

        if(typeof matrix[y1]?.[x1] !== 'number') {
            return fn(x, y, (i + 1) % 4);
        }

        q.push(matrix[y1][x1]);
        matrix[y1][x1] = '';

        return fn(x1, y1, i);
    }

    fn(0, 0, 0);
    return q;
};
