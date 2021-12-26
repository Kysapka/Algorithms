
// Function.prototype.customBind = function(context, ...args) {
//     const tempCtx = this;
//     return function(...args2) {
//         const uuid = Date.now().toString();
//         context[uuid] = tempCtx;
//         const res = context[uuid](...args, ...args2);
//         delete context[uuid];
//         return res;
//     }
// }
















Function.prototype.myApply = function (context, ...args) {
    const savedThis = this;
    return (function (...args2) {
        const unicID = Date.now().toString()
        console.log(unicID)
        context[unicID] = savedThis
        return context[unicID](...args, ...args2)
        delete context[unicID]
   })()
}


const obj1 = {
    name: 'Vasya',
    sayName: function () {
        console.log('My name is ', this.name)
    }
}

const obj2 = {
    name: 'Ivan',
}

// obj1.sayName.bind(obj2)()
obj1.sayName.myApply(obj2)


























