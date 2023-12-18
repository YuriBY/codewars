// Create a function that takes a Roman numeral as its argument and returns its value as a numeric decimal integer. You don't need to validate the form of the Roman numeral.

// Modern Roman numerals are written by expressing each decimal digit of the number to be encoded separately, starting with the leftmost digit and skipping any 0s. So 1990 is rendered "MCMXC" (1000 = M, 900 = CM, 90 = XC) and 2008 is rendered "MMVIII" (2000 = MM, 8 = VIII). The Roman numeral for 1666, "MDCLXVI", uses each letter in descending order.

const dict = {M: 1000, D: 500, C: 100, L: 50, X: 10, V: 5, I: 1};


function solution (roman) {
    let sum = 0;
    if (roman.length === 1) {
        sum = dict[roman[0]];
    } else if ((roman.length === 2)) {
        if (dict[roman[1]] > dict[roman[0]]) {
            sum = dict[roman[1]] - dict[roman[0]] 
        } else {
            sum = dict[roman[0]] + dict[roman[1]];
        };                      
    } else if (roman.length > 2) {
        sum = dict[roman[0]];
        for (let i = 1; i < roman.length - 1; i++) {
            if (dict[roman[i + 1]] > dict[roman[i]]) {
                sum += (dict[roman[i + 1]] - dict[roman[i]]);
                console.log(sum);
                i += 1; 
                console.log(i);
            } else {
                sum += dict[roman[i]];
            };                      
        };
    };
    console.log(dict[roman.length - 1]);
    if (dict[roman.length - 1] > dict[roman.length - 2]) {
        console.log('sdd' + sum);
        return sum;
    } else {
        console.log('hi');
        return sum + dict[roman[roman.length - 1]];
    };    
    };
  

console.log(solution('CCXL'));