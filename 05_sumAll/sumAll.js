const sumAll = function(a,b) {
    if(typeof a !== 'number' || typeof b  !== 'number' || a < 0 || b < 0) return 'ERROR';
    let max = Math.max(a,b);
    let min = Math.min(a,b);
    let res = 0;
    for(let i = min; i<=max; i++){
        res +=i;
    }

    return res;
};

// Do not edit below this line
module.exports = sumAll;
