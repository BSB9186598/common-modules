function calculateSum(a,b){
    const sum = a+b;
    console.log(sum);
}
var x='calling from the sum file'
calculateSum(4,7)

module.exports = {x,calculateSum}