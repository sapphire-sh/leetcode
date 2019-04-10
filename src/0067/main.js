/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
const t = {
	undefined: 0,
	  "1": 1,
	  "0": 0,
  };
  var addBinary = function(a, b) {
	  const p = a.split('');
	  const q = b.split('');
	  const s = [];
	  let carry = 0;
	  while(p.length > 0 || q.length > 0) {
		  const x = t[p.pop()];
		  const y = t[q.pop()];
		  const z = x + y + carry;
		  carry = z >= 2 ? 1 : 0;
		  s.unshift(z % 2);
	  }
	  if(carry === 1) {
		  s.unshift(carry);
	  }
	  return s.join('');
  };
