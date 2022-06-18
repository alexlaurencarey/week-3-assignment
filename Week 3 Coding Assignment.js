let ages = [3, 9, 23, 64, 2, 8, 28, 93];

let last = ages[ages.length-1];
let first = ages[0];

function subtractAge (ages) {
    var result = (last - first);
    return result;
}

console.log(subtractAge());

ages.push(16);
console.log(ages);


