// ticate er discount
function discount(count) {
    if (count <= 100) {
        const total = count * 100;
        return total;
    }
    else if (count <= 200) {
        const total = count * 90;
        return total;
    }
    else {
        const total = count * 70;
        return total;
    }
}
const numberOfTecate=discount(400);
console.log(numberOfTecate);