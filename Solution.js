function repeatedString(s, n) {
    // Write your code here
    // 1) find the placement of the letter 1 in the String
    // 2) find the ratio of the letter a to the rest of the sentence
 
    // 1 3 4 6 7 9 10
    let j = 0

    const sArr = s.split('');
    const sLength = n/s.length
    for(let i = 0; i < sArr.length; i++) {
        if (sArr[i] === 'a') {
            const aPlacement = i*sLength
            if (aPlacement > n) {
                j+= aPlacement-1
            } else {
                j+=aPlacement
            }
        }
    }
    return Math.ceil(j)  
}
