/**
 * @param {number} x
 * @return {number}
 */
var _max = Math.pow(2, 31) - 1;
var max = Math.floor(_max / 10);
var _min = -Math.pow(2, 31);
var min = Math.ceil(_min / 10);
var reverse = function(x) {
    let res = 0;
    while(x !== 0) {
        const a = x % 10;
		x = (x - a) / 10;
		if(res > max) {
			return 0;
		}
		else if(res === max && a > 7) {
			return 0;
		}
        if(res < min) {
			return 0;
		}
		else if(res === min && a < -8) {
			return 0;
		}
        res = res * 10 + a;
    }
    return res;
};
