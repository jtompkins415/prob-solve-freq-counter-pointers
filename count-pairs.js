// add whatever parameters you deem necessary
function countPairs(numArr, num) {
    let numSet = new Set(numArr);
    let count = 0;
    for(let val of arr){
        numSet.delete(val);
        if (numSet.has(num - val)){
            count++;
        }
    }
    return count; 
}
