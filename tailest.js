// sob theke boro number ber korar niyom
const hight = [60, 70, 82, 72, 64, 91, 49];
function maxNumber(number) {
    let max = number[0];
    for (const maxNum of number) {
        if (maxNum > max) {
            max = maxNum;
        }
    }
    return max;
}

const resultMax = maxNumber(hight);
console.log(resultMax);



// sob theke soto number ber korar upay
const hightN = [55, 61, 63, 52, 73, 99, 50];
function minNumber(number2) {
    let minNew = number2[0];
    for (const store of number2) {
        if (minNew > store) {
            minNew = store;
        }
    }
    return minNew;
}
const resultMin = minNumber(hightN);
console.log(resultMin);
