const array = [3,6,3,-100,3,8,0,9,1,7,3,6,8,9,4,5,7,23,8,90,4,2];

let count = 0;
function selectionSort(array) {
    for(let i = 0; i < array.length; i++) {
        for(let j = 0; j < array.length; j++) {
            if (array[j] > array[j+1]) {
               [array[j], array[j+1]] = [array[j+1], array[j]]
            }
            count += 1;
        }

    }
    return array;
}

console.log(selectionSort(array));
console.log('count ', count)