function vaporcode(string) {
    let str = string.trim();
    let newStr = '';
    for (let i = 0; i < str.length - 1; i++) {
        if (str[i] !== ' ') {
              
            newStr += str[i].toUpperCase() + '  '
        }
    };
    newStr += str.charAt(str.length - 1).toUpperCase();
        
    return newStr 
   }

//    function vaporcode(string) {
//     return string.toUpperCase().split(" ").join("").split("").join("  ");
//   }



