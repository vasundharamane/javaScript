// block of code
let greet = "hello";
function add(a,b){
    let greet = "hi";
    return a+b;
}
console.log(greet);
console.log(add(1,2));


// anonymous function - that do not have name - fucntion expression
let sum = function(c,d){
    return c+d;
}

console.log("sum : " +  sum(1,2));


let sum1 =  (x,y) =>x+y;
console.log("sum1 : " + sum1(1,2));