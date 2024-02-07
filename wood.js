// wood diye chair table bade mot koto hoi 
function woodNeed(chireNeed, tableNeed, badeNeed) {
    const perchirewood = 5;
    const pertablewood = 8;
    const perbadewood = 50;


    const mostchire = chireNeed * perchirewood;
    const mosttable = tableNeed * pertablewood;
    const mostbade = badeNeed * perbadewood;

    const totlewood = mostchire + mosttable + mostbade;
    return totlewood

}
const storage = woodNeed(2, 3, 2);
console.log(storage);




// shirt er khetre
function shopping(shirt, pant, showes) {
    const shirtPrice = 500;
    const pantPrice = 400;
    const showesPrice = 900;


    const mostshirt = shirtPrice * shirt;
    const mostpant = pantPrice * pant;
    const mostshowes = showesPrice * showes;

    const totlemoney = mostshirt + mostpant + mostshowes;

    return totlemoney;
}
const allshop = shopping(2, 2, 4);
console.log(allshop);