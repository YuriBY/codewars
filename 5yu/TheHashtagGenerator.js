// The marketing team is spending way too much time typing in hashtags.
// Let's help them with our own Hashtag Generator!

// Here's the deal:

// It must start with a hashtag (#).
// All words must have their first letter capitalized.
// If the final result is longer than 140 chars it must return false.
// If the input or the result is an empty string it must return false.


function generateHashtag(str) {
    const strWithoutSpace = str.trim();
    if (strWithoutSpace.length === 0) return false;
    let result = strWithoutSpace.split(' ').filter(word => word.length > 0);
    let newResult = result.map(e => e[0].toUpperCase() + e.substring(1));
    let newStr = '#' + newResult.join('');
    if (newStr.length > 140) return false;
    return newStr;
}


generateHashtag("a".repeat(141))