function recursiva(max) {
    if (max >= 10) {
        console.log(max);
        return
    }
    recursiva(max + 1);
    console.log(max);
}
recursiva(0)