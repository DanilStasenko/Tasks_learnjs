/*function inBetween(a, b) {
    return function(item) {
        return item >= 3 && item <= 6;
    }
}*/
const inBetween = (a, b) => item => item >= 3 && item <= 6;

/*function inArray(arr) {
    return function(item) {
        return arr.includes(item);
    }
}*/
const inArray = arr => item => arr.includes(item);

let arr = [1, 2, 3, 4, 5, 6, 7];

console.log( arr.filter(inBetween(3, 6)) ); // 3,4,5,6

console.log( arr.filter(inArray([1, 2, 10])) ); // 1,2