function multiple(num1, num2) {
    // parameter a number na diye jodi string dei vul kore tahole ai ta bebohar krle "NaN " dekhabe na retur a ja thakbe ta dekhabe
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        return 'please provaid a number';

    }
    const mult = num1 * num2;
    return mult;
}
const result = multiple(5, 20);
console.log(result);





console.log("example 2 ");
// parameter a string na diye jodi number deoya hoi tahole number na dekhiye akta validation dekha tar jonno 
function name(first, last){
    if(typeof first !== 'string' || typeof last !== 'string'){
        return 'please enter a string value';
    }
    const full=first + ' '+ last;
    return full;
}
const result2=name(5, 9);
console.log(result2);