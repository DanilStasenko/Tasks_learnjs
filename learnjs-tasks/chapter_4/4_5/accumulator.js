function Accumulator(startingValue) {
    this.value = startingValue;

    this.read = function() {
        this.value = +prompt('number?');
        //this.value += 2;
    };
}

let accumulator = new Accumulator(3);
accumulator.read();
accumulator.read();

console.log(accumulator.value); 