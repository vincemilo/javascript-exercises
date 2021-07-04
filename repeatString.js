const repeatString = function(str,num) {
    let string = "";
    if (num < 0) {
        string = "ERROR";
    } else {
        for(let i=0;i<num;i++){
            string += str;
        }
    }
    return string;
};

module.exports = repeatString;
