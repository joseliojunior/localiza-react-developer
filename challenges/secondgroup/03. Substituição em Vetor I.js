/**
 * @author Josélio de S. C. Júnior <joseliojrx25@gmail.com>
 * @copyright Josélio de S. C. Júnior 2021
 */

const n = Array.from(Array(10), () => +gets());

for (let i = 0; i < 10; i++) {
    console.log(`X[${i}] = ${n[i] <= 0 ? 1 : n[i]}`);
}