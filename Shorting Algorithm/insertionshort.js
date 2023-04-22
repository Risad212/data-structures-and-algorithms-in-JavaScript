
function insertionShort(arr) {
    for (let i = 1; i < arr.length; i++) {
        for (let j = i; j > 0; j--) {
            if (arr[j] < arr[j-1]) {
                [arr[j],arr[j-1]] = [arr[j-1],arr[j]]
            }else{
                break
            }
        }
    }
    return arr
}
console.log(insertionShort([5,90,1,47,0]));