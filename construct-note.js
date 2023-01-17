// function createFreqCounter(str){
//     let frequencies = new Map();

//     for (let char of str){
//         let charCount = frequencies.get(char) || 0;
//         frequencies.set(char, charCount + 1);
//     }

//     return frequencies;
// }


// add whatever parameters you deem necessary
function constructNote(msg, chars) {

    const charsFreq = {};
    const msgFreq = {}

    for(let char of chars) {
        charsFreq[char] = ++charsFreq[char] || 1
    }

    for(let char of msg) {
        msgFreq[char] = ++msgFreq[char] || 1
    }

    // const msgFreq = createFreqCounter(msg);
    // const charsFreq = createFreqCounter(chars); 

    for(let key in msgFreq){
        if(!charsFreq[key]) return false
        if(msgFreq[key] > charsFreq[key]) return false
    }

    return true;
}
