/**
 * @param {string} S
 * @return {string[]}
 */
var letterCasePermutation = function(S) {
    const t = {"0":true,"1":true,"2":true,"3":true,"4":true,"5":true,"6":true,"7":true,"8":true,"9":true,"a":"A","A":"a","b":"B","B":"b","c":"C","C":"c","d":"D","D":"d","e":"E","E":"e","f":"F","F":"f","g":"G","G":"g","h":"H","H":"h","i":"I","I":"i","j":"J","J":"j","k":"K","K":"k","l":"L","L":"l","m":"M","M":"m","n":"N","N":"n","o":"O","O":"o","p":"P","P":"p","q":"Q","Q":"q","r":"R","R":"r","s":"S","S":"s","t":"T","T":"t","u":"U","U":"u","v":"V","V":"v","w":"W","W":"w","x":"X","X":"x","y":"Y","Y":"y","z":"Z","Z":"z"}
    let x = [
        '',
    ];
    S.split('').forEach((e) => {
        const a = [];
        for(let i = 0; i < x.length; ++i) {
            if(t[e] === true) {
                a.push(x[i] + e);
            }
            else {
                a.push(x[i] + e);
                a.push(x[i] + t[e]);
            }
        }
        x = a;
    });
    return x;
};
