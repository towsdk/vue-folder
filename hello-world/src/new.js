const numbers = [ 2.3, 33, 23.8, 22.9, 23, 10.1];
let result1 = numbers.reduce((total, number)=> (total = total + number),0);
console.log(Math.round(result1))

let result = numbers.reduce(funcTotal,0);
function funcTotal(total,number){
    return total + Math.round(number);
}
console.log(result)