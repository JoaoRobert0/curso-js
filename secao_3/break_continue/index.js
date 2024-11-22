/*
BREAK E CONTINUE
*/

const nums = [1, 2, 3, 4, 5];

for (const n of nums) {
    if (n == 3) {
        continue;
    }
    if (n == 4) {
        break;
    }
    console.log(n);
}