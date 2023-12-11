// Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

// Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

// If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.


function order(words){
    let newOrder = words.split(' ');
    const myArray = new Array(newOrder.length).fill(0);    
    for (let i = 0; i < newOrder.length; i++) {
        let tempArr = newOrder[i].split('');
        for (let x = 0; x < tempArr.length; x++) {
            if (Number(tempArr[x])) {
                myArray.splice(Number(tempArr[x]) - 1, 1, newOrder[i])
            }
        }
    }
    if (words) {
        return myArray.join(' ')
    } else {
        return ''
    }
    
    
  };

console.log(order("4of Fo1r pe6ople g3ood th5e the2"));