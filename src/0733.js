/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, newColor) {
    function search(y, x, color) {
        if(image[y][x] !== color) {
            return;
        }
        image[y][x] = newColor;
        if(x > 0) {
            search(y, x - 1, color);
        }
        if(y > 0) {
            search(y - 1, x, color);
        }
        if((image[0].length - 1) > x) {
            search(y, x + 1, color);
        }
        if((image.length - 1) > y) {
            search(y + 1, x, color);
        }
    }
    const color = image[sr][sc];
    if(color !== newColor) {
        search(sr, sc, color);
    }
    return image;
};
