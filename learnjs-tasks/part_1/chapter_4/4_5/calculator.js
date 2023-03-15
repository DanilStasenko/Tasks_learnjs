function Calculator() {
    this.read = function() {
        this.a = +prompt('a?');
        this.b = +prompt('b?');
        //this.a = 5;
        //this.b = 3;
    };

    this.sum = function() {
        return this.a + this.b;
    };

    this.mul = function() {
        return this.a * this.b;
    }
}

let calculator = new Calculator();

calculator.read();
console.log( calculator.sum() );
console.log( calculator.mul() );