const a1 = [1, 2, 3];
const a2 = [10, 20, 30];
const a3 = a1.concat(a2, [4, 5, 6], "João");
console.log(a3);

// Ou usando spread operator
const a4 = [...a1, ...a2];
console.log(a4);