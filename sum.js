function calculateSum(a,b){
    const sum = a+b;
    console.log(sum);
}
var x='calling from the sum file'
calculateSum(4,7)

module.exports = {x,calculateSum}


// we can write line 8 also like that 
module.exports.x =x
module.exports.calculateSum =calculateSum