let arr = [0, 1, 2, 3, 4, 5, 6];

let chet = arr.filter(elem => elem % 2 === 0);
let zero = arr.filter(elem => elem === 0);
console.log(`${chet.length} - четных, из них равных нулю - ${zero.length}`);

let nechet = arr.filter(elem => elem % 2 !== 0);
console.log(`${nechet.length} - нечетных`);
