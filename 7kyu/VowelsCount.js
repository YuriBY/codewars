function getCount(str) {
    let num = 0;
    let vowelsArr = ['a', 'e', 'i', 'o', 'u'];
    str.trim(); 
    for (i = 0; i < str.length; i++) {
      if (vowelsArr.includes(str[i])) {
        num += 1
      }
    }
    return num;
  };

console.log(getCount('abracadabra'));
  
// function getCount(str) {
//   return str.split('').filter(c => "aeiouAEIOU".includes(c)).length;
//  }

