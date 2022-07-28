/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
 var canConstruct = function(ransomNote, magazine) {
    const p = ransomNote.split('').sort((a, b) => a.localeCompare(b));
    const q = magazine.split('').sort((a, b) => a.localeCompare(b));

    for(const r of p) {
        let s;
        while(q.length > 0 && r !== s) {
            s = q.shift();
        }
        if(q.length === 0 && r !== s) {
            return false;
        }
    }
    return true;
};
