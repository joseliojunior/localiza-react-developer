/**
 * @author Josélio de S. C. Júnior <joseliojrx25@gmail.com>
 * @copyright Josélio de S. C. Júnior 2021
 */

const arr = [];
let key = true;
let status = true;

while (key) {
    const i = +gets();
    if (status) {
        i >= 0 && i <= 10 ? arr.push(i) : console.log('nota invalida');
        if (arr.length === 2) {
            console.log(`media = ${(arr.reduce((a, b) => a + b) / 2).toFixed(2)}`);
            arr.length = 0;
            status = false;
        }
    } else {
        console.log('novo calculo (1-sim 2-nao)');
        i === 1 ? status = true : i === 2 ? key = false : null;
    }
}