// You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.


function getMiddle(s)
{
    const x = s.length;
  if (x % 2 === 0) {
    return s.slice((x / 2) - 1, (x / 2) + 1)
  } else {
    return s.slice(Math.trunc(x / 2), Math.trunc(x / 2) + 1)
  }
};

console.log(getMiddle("test"));