/*
const pow = (a, b) => a**b;
*/

const pow = (a, b) => {
    let result = a;

    for (let i = 1; i <= b; i++) {
        result *= b;
    }

    return result;
}
