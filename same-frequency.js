
// add whatever parameters you deem necessary
function sameFrequency(num1, num2) {
    const strNum1 = num1.toString();
    const strNum2 = num2.toString();
    if(strNum1.length !==  strNum2.length) return false;

    const num1Freq = {};
    const num2Freq = {};

    for(let i = 0; i < strNum1.length; i++){
        num1Freq[strNum1[i]] = (num1Freq[strNum1[i]] || 0) + 1
    }

    for(let j = 0; j < strNum1.length; j++){
        num2Freq[strNum2[j]] = (num2Freq[strNum2[j]] || 0) + 1
    }

    for (let key in num1Freq){
        if(num1Freq[key] !== num2Freq[key]) return false;
    }

    return true;

}
