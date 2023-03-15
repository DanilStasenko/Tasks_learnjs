function sumToFor(n) {
    let sum = 0;
    
    for (let i = 0; i <= n; i++) {
        sum += i;
    }

    return sum;
}

const sumToRecursion = (n) => n === 0 ? 0 : sumToRecursion(n-1) + n;

const sumToArithmeticProgression = (n) => n * (n + 1) / 2;