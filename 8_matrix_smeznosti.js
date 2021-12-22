// Матрица смежности

// const matrix = [
//     [0,1,1,0,0,0,0],
//     [0,0,0,0,1,0,0],
//     [0,0,0,1,0,1,0],
//     [0,0,0,0,1,0,0],
//     [0,0,0,0,0,0,1],
//     [0,0,0,0,1,0,0],
//     [0,0,0,0,0,0,0],
// ]


Function.prototype.myBind = function(ctx, ...args1) {
        const fixCtx = this;
        return function(...args2) {
                const uuid = Date.now().toString
                ctx[uuid] = fixCtx;
                const result = ctx[uuid](...args1, ...args2)
                delete ctx[uuid];
                return result;
        }
}

const a = {
        name: 'Vasya',
        sayName: function(a,b) {
                console.log(this.name + a + b)
        }
}

const b = {
        name: 'Petya'
}

a.sayName()
a.sayName.myBind(b, 'test1')('test2')