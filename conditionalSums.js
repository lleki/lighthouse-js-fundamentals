var conditionalSum = function(values, condition) {
    var even = 0;
    var odd = 0;
    if (values.length < 1 || values == undefined) {
        return 0;
    } else {
        for (var i = 0; i < values.length; i++) {
            if (values[i] % 2 == 0) {
                even += values[i];
            } else {
                odd += values[i];
            }
        }
        if (condition == "even") {
            return even;
        } else {
            return odd;
        }
    }
};

console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));