/**
 * @param {string} S
 * @return {string}
 */
var toGoatLatin = function(S) {
    return S.split(' ').map((e, i) => {
        switch(e[0]) {
            case 'a':
            case 'e':
            case 'i':
            case 'o':
            case 'u':
            case 'A':
            case 'E':
            case 'I':
            case 'O':
            case 'U': {
                e += 'ma';
                break;
            }
            default: {
                const t = e.split('');
                const x = t.shift();
                t.push(x);
                e = t.join('') + 'ma';
                break;
            }
        }
        return e + Array.from(Array(i + 1)).map(_ => 'a').join('');
    }).join(' ');
};
