const defaultResult = 0;
let currentResult = defaultResult; // camelCase

currentResult = ((currentResult + 10) * 3) / 2 - 1; // operations

let calculationDesciption = "(" + defaultResult + "+ 10) * 3 / 2 - 1";

outputResult(currentResult, calculationDesciption);
