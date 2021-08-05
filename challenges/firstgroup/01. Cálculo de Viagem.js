/**
 * @author Josélio de S. C. Júnior <joseliojrx25@gmail.com>
 * @copyright Josélio de S. C. Júnior 2021
 */

const line = gets().split(" ").map(e => +e).reduce((a, b) => a * b);
console.log((line / 12).toFixed(3));