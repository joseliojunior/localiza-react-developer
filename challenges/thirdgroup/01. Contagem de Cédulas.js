/**
 * @author Josélio de S. C. Júnior <joseliojrx25@gmail.com>
 * @copyright Josélio de S. C. Júnior 2021
 */

let v = +gets();
console.log(v);
[100, 50, 20, 10, 5, 2, 1].forEach(
    x => {
        console.log(`${parseInt(v / x)} nota(s) de R$ ${x},00`);
        v %= x;
    }
);