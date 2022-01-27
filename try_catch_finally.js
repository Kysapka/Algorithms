// function someFunc() {
//     try {
//         if(Math.random() <= 0.5) {
//             throw new Error('');
//         }
//         return 1;
//     } catch (e) {
//         return 2;
//     } finally {
//         return 3;
//     }
// }
// console.log(someFunc());

// function  superSum(...args) {
//     let sum = 0;
//     let firstArgs = args[0];
//     function helper(firstArgs) {
//         if (!firstArgs) {
//             return sum
//         } else {
//             sum = sum + firstArgs
//             return helper
//         }
//     }
//     return helper(firstArgs)
// }
//     const result = superSum(1)(2)(3)()
//     console.log(result)

// const arr = [1,2,3,4,5,6,7,8]
//
// console.log(arr.filter((el) => {
//
//     return !(el % 2);
// }))

// let arr = [1,2,[3,4,5,[6,7],8],9,10,[11,12,[13],[14, 15],16, [17, 18], 19, 20]];
//
// const myFlat = function(array) {
//     let result = [];
//     array.forEach((el) => {
//         if(!Array.isArray(el)) {
//             result.push(el)
//         } else {
//             result = [...result, ...myFlat(el)]
//         }
//     })
//     return result;
// }
//
// console.log(myFlat(arr));

// let i = 0;
// while (i++ < 4) {
//     setTimeout((j) => {
//         console.log(j)
//     }, i*1000, i)
// }