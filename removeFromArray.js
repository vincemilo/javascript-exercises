const removeFromArray = function(array,...rem) {

    for (let i = array.length - 1; i >= 0; i--){
        const index = array.indexOf(rem[i]);
        if (index >= 0){
            array.splice(index, 1);
    }
    }
    return array;
};

module.exports = removeFromArray;