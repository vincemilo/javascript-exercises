const sumAll = function(beg,end) {
    let total = 0;
    if (end < 0 || beg < 0 || Number.isInteger(beg) == false || Number.isInteger(end) == false) {
        total = "ERROR";
    } else if (end > beg){
        for(let i=beg;i<=end;i++){
            total += i;
        }    
    } else {
        for(let i=end;i<=beg;i++){
            total += i;
        }
    }
    return total;
};

module.exports = sumAll;
