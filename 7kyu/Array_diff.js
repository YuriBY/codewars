function arrayDiff(a, b) {
    let newArr = [];
    let x = 0;
    for (let i = 0; i < a.length; i++) {
        for (let m = 0; m < b.length; m++) {
           if (a[i] === b[m]) {
            x += 1;
            }
        };
        if (x === 0) {
            newArr.push(a[i])
        } else {
            x = 0
        }
    };
    a = newArr;
    return a;
};

// function array_diff(a, b) {
//     return a.filter(e => !b.includes(e));
//   }