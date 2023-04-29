let currentResult = 0; // camelCase
// JS는 함수 내부에서 외부에서 선언한 변수에 접근할 수 있다.
// let result;
// 하지만 local/block-scope 변수를 외부에서 접근할 수는 없다.

function add(a, b) {
    currentResult = currentResult + userInput.value;
    outputResult(currentResult, "");
}

addBtn.addEventListener("click", add);
