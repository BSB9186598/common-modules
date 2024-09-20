// all this we see untill now is common module or cjs


// require ("./sum.js")
// const obj = require("./sum.js")


// const {x,calculateSum} = require("./sum")
// const {multiplyFun} = require("./calculate/multiply")

// so instead of write above these two line we will only write one below 

const {calculateSum, multiplyFun} = require("./calculate")

// we will simple import data.json file below 

const data = require("./data.json")
console.log(data);
const name = "hello node js";
console.log(name);

var a=10
var b=8

// obj.calculateSum(2,2)
// console.log(obj.x)

calculateSum(a,b)
multiplyFun(a,b)

// console.log(x)
