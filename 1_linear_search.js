const array = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
// let count = 0
let count = 0

function linearSearch(array, item) {

    for (let i = 0; i < array.length; i++) {

        if (array[i] === item) {
            return i;
        }
        count += 1
    }
    return null
}

console.log(linearSearch(array, 15))
console.log('count = ', count)
