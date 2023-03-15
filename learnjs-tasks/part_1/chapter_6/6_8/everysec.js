/*function printNumbers(from, to) {
    let current = from;

    setTimeout(function f() {
        console.log(current);
        if (current < to) {
            setTimeout(f, 1000);
        }
        current++;
    }, 1000)
}*/

function printNumbers(from, to) {
    let current = from;

    let timerId = setInterval(function f() {
        console.log(current);
        if (current === to) {
            clearInterval(timerId);
        }
        current++;
    }, 1000)
}