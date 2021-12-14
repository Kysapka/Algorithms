const number = 5;

function reqursion(number) {
    if(number === 1) return number;
    return number*reqursion(number-1);
}

console.log(reqursion(number));
