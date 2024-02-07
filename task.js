// sob theke soto number koto
const number = [167, 190, 120, 165, 137];
function minNumber(numbers) {
    let min = numbers[0];
    for (const number2 of numbers) {
        if (number2 < min) {
            min = number2;
        }
    }
    return min;
}
const minResult = minNumber(number);
console.log(minResult);