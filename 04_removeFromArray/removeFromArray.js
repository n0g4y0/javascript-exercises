const removeFromArray = function(arr, ...e) {
    return arr.filter(i => !e.includes(i) );
};

// Do not edit below this line
module.exports = removeFromArray;
