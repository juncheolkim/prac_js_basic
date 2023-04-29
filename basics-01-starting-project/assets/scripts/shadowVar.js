// 함수 안에 다시 선언된 userName은 섀도우 변수이다.
// 섀도우 변수란 함수 외부에 선언된 변수를 함수 내부에서 다시 선언한 경우인데,
// 이 상황에서 섀도우 변수 userName은 기존 전역변수 userName에 접근하는 것이 아니라,
//  로컬 스코프의 새로운 변수를 생성하는 것이다.
//  함수 밖에서 userName에 접근하면, 섀도우 변수에 접근하는 것이 아닌 전역 변수에 접근하게 된다.

let userName = "Max";
function greetUser(name) {
    let userName = name;
    alert(userName);
}
userName = "Manu";
greetUser("Max");
