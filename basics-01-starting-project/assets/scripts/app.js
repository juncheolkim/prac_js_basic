const defaultResult = 0;
let currentResult = defaultResult; // camelCase

currentResult = ((currentResult + 10) * 3) / 2 - 1; // operations

let calculationDesciption = `( ${defaultResult}+ 10 ) * 3 / 2 - 1`;
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String#Escape_notation
// let errorMessage = "An error \n occurred!";

outputResult(currentResult, calculationDesciption);
