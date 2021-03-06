
let lst = [4, 7, 2, 11, 8, 9];

// array support both key and value based iterations
for (let k in lst) {
    console.log(k + ' -> ' + lst[k]);
}
for (let v of lst) {
    console.log(v);
}

console.log(lst.sort((a, b) => b - a));
// the arrow function is equivalent to the inline function below
console.log(lst.sort(function(a, b) {return a - b}));

function cmp(a: number, b: number): number {  
    return b - a;  // desc sort
}

console.log(lst.sort(cmp));

function cmp2(a: any, b: any): number { // a and b have 'any' type to supprt duck typing
    // use compare operator to replace '-' to support more types like string
    if (a < b) {
        return -1;
    }
    if (a > b) {
        return 1;
    }
    return 0;
}

let cst = ['abc', 'wity', 'oxu', 'sei'];
console.log(cst.sort(cmp2));

cst.forEach(str => console.log(str));

console.log('every element > b: ' + cst.every(str => str > 'b'));

console.log('filtered array with element > b: ' + cst.filter(str => str > 'b').join(', '));

/** reduce is powerful: Apply a function simultaneously against two values of 
 * the array (from left-to-right) as to reduce it to a single value.
 */

// this is like buble sort to return the 'largest' string
console.log(cst.reduce((left, right) => {
    if (left >= right) {
        return left;
    } else {
        return right;
    }
}));

console.log(cst.map((str: string) => str.toUpperCase()));




