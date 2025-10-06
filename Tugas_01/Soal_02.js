const T = 20; 
const r = 4;   
const pi = 3.14;

const luasPermukaan = 2 * pi * r * (r + T);

console.log("====================================");
console.log("     Program Luas Permukaan Tabung   ");
console.log("====================================");
console.log(`Tinggi (T): ${T}`);
console.log(`Jari-jari (r): ${r}`);
console.log(`Luas Permukaan Tabung: ${luasPermukaan.toFixed(2)}`);