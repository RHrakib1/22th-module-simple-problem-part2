// 3 ta number er modhe konta boro simpple vabe
const hasan = 10;
const rakib = 80;
const tarin = 110;
if (hasan > rakib && hasan > tarin) {
    console.log("hasan is big");
}
else if (rakib > hasan && rakib > tarin) {
    console.log("rakib is biggggggggg");
}
else {
    console.log("tarin is big");
}


console.log("function diye :");
function max3(num1, num2, num3) {
    if (num1 > num2 && num1 > num3) {
        return num1;
    }
    else if (num2 > num1 && num2 > num3) {
        return num2;
    }
    else{
        return num3;
    }
}
// const numbers = (24, 53, 68);
const maximum = max3(24, 54, 60);
console.log(maximum);
