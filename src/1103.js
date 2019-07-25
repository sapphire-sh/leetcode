/**
 * @param {number} candies
 * @param {number} num_people
 * @return {number[]}
 */
var distributeCandies = function(candies, num_people) {
    const x = [...Array(num_people)].map(_ => 0);
    let index = 0;
    let turn = 1;
    while(candies > 0) {
        if(candies < turn) {
            turn = candies;
        }
        x[index] += turn;
        candies -= turn;
        index = (index + 1) % num_people;
        turn += 1;
    }
    return x;
};
