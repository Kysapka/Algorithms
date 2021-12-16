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

function  superSum(...args) {
    let sum = 0;
    let firstArgs = args[0];
    function helper(firstArgs) {
        if (!firstArgs) {
            return sum
        } else {
            sum = sum + firstArgs
            return helper
        }
    }
    return helper(firstArgs)
}
    const result = superSum(1)(2)(3)()
    console.log(result)