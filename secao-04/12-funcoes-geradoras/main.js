// Geradora comum
function* geradora1() {
    yield "Valor 1";
    yield "Valor 2";
}

const f = geradora1()
console.log(f.next());
console.log(f.next());
console.log(f.next());

// Geradora infinita
function* geradora2() {
    let counter = 0;

    while (true) {
        yield counter;
        counter++;
    }
}

const g2 = geradora2();
console.log(g2.next());
console.log(g2.next());
console.log(g2.next());
