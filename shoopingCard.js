
function productBuy(products) {
    let sumPrice = 0;
    for (const product of products) {
        const countProduct = product.price * product.count;
        sumPrice = sumPrice + countProduct;
    }
    return sumPrice

}
const products = [
    { name: 'sampo', price: 400, count: 2 },
    { name: 'shirt', price: 1200, count: 4 },
    { name: 'tel', price: 200, count: 1 },
    { name: 'pant', price: 900, count: 3 },
]
const totlemoney = productBuy(products);
console.log(totlemoney);