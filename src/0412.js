/**
 * @param {number} n
 * @return {string[]}
 */
 var fizzBuzz = function(n) {
    const p = Array.from(new Array(n)).map((_, i) => i + 1);
    return p.map(q => {
        if(q % 15 === 0) {
            return 'FizzBuzz';
        }
        if(q % 5 === 0) {
            return 'Buzz';
        }
        if(q % 3 === 0) {
            return 'Fizz';
        }
        return `${q}`;
    })
};
