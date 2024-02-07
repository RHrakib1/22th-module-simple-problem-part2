// calculator make 
function add(num1, num2) {
    const sum = num1 + num2;
    return sum;
}
function subtruct(num1, num2) {
    const sub = num1 - num2;
    return sub;
}
function multi(num1, num2) {
    const mul = num1 * num2;
    return mul;
}
function divide(num1, num2) {
    const div = num1 / num2;
    return div;
}
function calculator(a, b, operation) {
    if (operation === 'add') {
        const result = add(a, b);
        return result;
    }
    else if (operation === 'subtruct') {
        const result = subtruct(a, b);
        return result;
    }
    else if (operation === 'multi') {
        const result = multi(a, b);
        return result;
    }
    else if (operation === 'divide') {
        const result = divide(a, b);
        return result;
    }
    else {
        return "only 'add', 'subtruct', 'multi', 'divide' operation added"
    }
}
const storage = calculator(8, 10, 'add');
console.log(storage);