
var RecentCounter = function() {
    this.history = [];
};

/**
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function(t) {
    this.history.push(t);
    this.history = this.history.filter((e) => {
       return e >= (t - 3000);
    });
    return this.history.length;
};

/**
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */
