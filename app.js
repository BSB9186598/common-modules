// all this we see untill now is common module or cjs


// require ("./sum.js")
// const obj = require("./sum.js")
const {x,calculateSum} = require("./sum")
const name = "hello node js";
console.log(name);

// obj.calculateSum(2,2)
// console.log(obj.x)
calculateSum(20,20)
console.log(x)
