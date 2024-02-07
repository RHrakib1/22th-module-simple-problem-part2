// object diye ki vabe min ber krbo
const mobile = [
    { name: "samsang", price: 4000, color: "black", camara: "20mp" },
    { name: "nokia", price: 6000, color: "black", camara: "20mp" },
    { name: "samphony", price: 2000, color: "black", camara: "20mp" },
    { name: "i-phone", price: 412000, color: "black", camara: "20mp" },
]
function mobils(mobile) {
    let phn = mobile[0];
    for (const rakib of mobile) {
        if (rakib.price < phn.price) {
            phn = rakib;

        }
    }
    return phn;

}
const mobileStore = mobils(mobile);
console.log(mobileStore);