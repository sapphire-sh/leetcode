/**
 * @param {string[]} ops
 * @return {number}
 */
var calPoints = function(ops) {
    const x = [];
    ops.forEach((e) => {
       switch(e) {
           case '+': {
               x.unshift(x[0] + x[1]);
               break;
           }
           case 'D': {
               x.unshift(x[0] * 2);
               break;
           }
           case 'C': {
               x.shift();
               break;
           }
           default: {
               x.unshift(parseInt(e));
               break;
           }
       }
    });
    return x.reduce((a, b) => a + b);
};
