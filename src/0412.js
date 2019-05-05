/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    return Array.from(Array(n)).map((e, i) => {
        return i + 1;
    }).map((e) => {
        let str = [];
        if(e % 3 === 0) {
            str.push('Fizz');
        }
        if(e % 5 === 0) {
            str.push('Buzz');
        }
        if(str.length > 0) {
            return str.join('');
        }
        return e.toString();
    });
};
