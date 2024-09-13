function solution(number) {
    let romanNumber = '';
    const thouthandsAmount = Math.floor(number / 1000);
    const romanThoutands = ['', 'M', 'MM', 'MMM']
    romanNumber += romanThoutands[thouthandsAmount]
    
    const hundredsAmount = Math.floor((number - (thouthandsAmount * 1000)) / 100);
    const romanHundreds = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];
    romanNumber += romanHundreds[hundredsAmount];

    const desAmount = Math.floor((number - (thouthandsAmount * 1000) - (hundredsAmount * 100)) / 10); 
    const romanDes = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
    romanNumber += romanDes[desAmount];

    const digitAmount = number - (thouthandsAmount * 1000) - (hundredsAmount * 100) - (desAmount) * 10; 
    const romanDigit = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
    romanNumber += romanDigit[digitAmount];
        
    return romanNumber;
};

console.log(solution(2008));

// function solution(number)
// {
//   var result   = '',
//       decimals = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1],
//       roman    = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];

//   decimals.map(function (value, index) {
//     while (number >= value) {
//       result += roman[index];
//       number -= value;
//     }
//   });
  
//   return result;
// }
