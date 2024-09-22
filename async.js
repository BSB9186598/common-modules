const fs = require("fs");
const https = require("https");

console.log("hello world !");

var a= 7672672;
var b = 51384;

https.get("https://dummyjson.com/products/1", (res)=> {
    console.log("fetch data successfully");
})

setTimeout(()=>{
    console.log("setTimeout called after 5 second");
},5000)

//synchronous


fs.readFile("./file.txt","utf8", (err,data) => {
    console.log("file data : ", data);
})

function multiplyFn(x,y){
    const result = a*b;
    return result;
}

var c= multiplyFn(a,b)

console.log("multiply result is : ", c);