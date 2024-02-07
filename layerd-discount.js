// dhape dhape discount ki vabe kore 
/**
 * first 100----> 100
 * second 101 to 200 ---->90
 * baki gula 200 ---->70 
 */
function layerdDiscountTotal(quantity) {
    const first100Price = 100;
    const second100Price = 90;
    const remeningPrice = 70;
    if (quantity <= 100) {
        const total = quantity * first100Price;
        return total;
    }
    else if (quantity <= 200) {
        const first100Total = 100 * first100Price;
        const remainingquantity = quantity - 100;
        const remainningTotal = remainingquantity * second100Price;
        const total = first100Total + remainningTotal;
        return total;
    }
    else {
        const first100Total = 100 * first100Price;
        const second100total = 100 * second100Price;
        const remainingquantity = quantity - 200;
        const remainningTotal = remainingquantity * remeningPrice;
        const total = first100Price + second100Price + remainingquantity;
        return total;
    }

}
const storagetotal=layerdDiscountTotal(200);
console.log(storagetotal);