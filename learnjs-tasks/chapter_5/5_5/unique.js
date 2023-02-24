function unique(arr) {
    let uniqueArr = [];

    for (let el of arr) {
        if (!uniqueArr.includes(el)) {
            uniqueArr.push(el);
        }
    }

    return uniqueArr;
}
/*
function unique(arr) {
    return Array.from( new Set(arr) );
}
*/