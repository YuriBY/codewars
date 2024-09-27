// You will be given a number and you will need to return it as a string in Expanded Form. For example:

// expandedForm(12)    --> should return "10 + 2"
// expandedForm(42)    --> should return "40 + 2"
// expandedForm(70304) --> should return "70000 + 300 + 4"
// NOTE: All numbers will be whole numbers greater than 0.

// function expandedForm(num) {
//   let i = 1;
//   let div = 10;
//   while ((num / div) > 1) {
//     i += 1;
//     div = div * 10
//   };
  
  
//   if (i === 1) {
//     return String(i)
//   }
//   let str = `${(Math.floor(num / (10 ** (i - 1))) * (10 ** (i - 1)))}`;
 
  
//   let newNum = num - (Math.floor(num / (10 ** (i - 1))) * (10 ** (i - 1)))
  
  
//   while (i > 2) {
//     let x = i - 2;
//     if (Math.floor(newNum / (10 ** x)) * (10 ** x) > 0) {
//       str += ` + ${(Math.floor(newNum / (10 ** x)) * (10 ** x))}`
//     }
//     newNum = newNum - (Math.floor(newNum / (10 ** x)) * (10 ** x));
//     i -= 1;    
//     x += 1; 
    
    
//   }
//   if (num % 10 > 0) {
//     str += ` + ${num % 10}`
//   }
  
     
//   return str
// }
function expandedForm(num) {
   
  return String(num)
          .split("")
          .map((num, index, arr) => num + "0".repeat(arr.length - index -1 ))
          .filter((num) => Number(num) != 0)
          .join(" + ")
}


expandedForm(70304)