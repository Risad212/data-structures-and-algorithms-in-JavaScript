

// function getTwoSum(array,targetSum){
//   for (let firstIndex = 0; firstIndex < array.length - 1; firstIndex++) {
//     const firstNumber = array[firstIndex];

//     for (let secondIndex = firstIndex + 1; secondIndex < array.length; secondIndex++) {
//         const secondNumber = array[secondIndex];
        
//         if (firstNumber + secondNumber === targetSum) {
//             return [firstNumber,secondNumber]
//         }
//     }
//   }
//   return []
// }
// let result = getTwoSum([14,36,89,8],10)

// console.log(result);



// function getTwoSumV2(array,targetSum){
//     let leftSide = 0;
//     let rightSide = array.length - 1

//     while (leftSide < rightSide) {
//         let firstNumber = array[leftSide]
//         let secondNumber = array[rightSide]
//         let sum = firstNumber + secondNumber

//         if (sum > targetSum) {
//             rightSide --
//         }else if(targetSum > sum){
//             leftSide ++;
//         }else{
//             return [firstNumber,secondNumber]
//         }
//     }
// }
//   let result = getTwoSumV2([1,2,3,4],4)
  
//   console.log(result);


//   function getTwoSumV3(array,targetSum){
//     const map = {}
//     for (let index = 0; index < array.length; index++) {
//         const firstNumber = array[index];
//         const othersNumber = targetSum - firstNumber

//         if (map[othersNumber]) {
//             return [firstNumber,othersNumber]
//         }
//         map[othersNumber] = true
//     }
//     return []
// }
//   let result = getTwoSumV3([1,2,3,4],6)
  
//   console.log(result);