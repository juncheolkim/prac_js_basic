const defaultResult = 0;
let currentResult; // camelCase

function add(a, b) {
    const result = a + b;
    return result;
}

currentResult = add(1, 2);

let calculationDesciption = `( ${defaultResult}+ 10 ) * 3 / 2 - 1`;

outputResult(currentResult, calculationDesciption);
