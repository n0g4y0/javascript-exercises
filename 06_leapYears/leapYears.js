const leapYears = function(year) {
    //return year % 4 === 0 || year % 400 ;
    if(year % 100 === 0){
        return ((year % 100 === 0 ) && (year % 400 === 0 ) && (year % 4 === 0 )); 
    }else{
        return year % 4 === 0;
    }
    
};

// Do not edit below this line
module.exports = leapYears;
