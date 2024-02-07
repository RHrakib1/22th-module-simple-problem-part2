const shoppingTodaraz = [
    { name: 'sampo', price: 400 },
    { name: 'shirt', price: 1200 },
    { name: 'tel', price: 200 },
    { name: 'pant', price: 900 },
]

function darazShopping(shoppingTodaraz) {
    let totalPrice = 0;
    for (const darazBuy of shoppingTodaraz) {
        totalPrice = totalPrice + darazBuy.price;
    }
    return totalPrice;

}
const shoppingPrice = darazShopping(shoppingTodaraz);
console.log(shoppingPrice);