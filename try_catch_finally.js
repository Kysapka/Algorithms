function someFunc() {
    try {
        if(Math.random() <= 0.5) {
            throw new Error('');
        }
        return 1;
    } catch (e) {
        return 2;
    } finally {
        return 3;
    }
}
console.log(someFunc());