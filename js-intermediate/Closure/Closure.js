// 클로저 예시

function makeAdder(x) {
  return function (y) {
    return x + y;
  };
}

// add3은 자신을 호출한 환경을 기억함 (x = 3)
const add3 = makeAdder(3);
console.log(add3(2)); // 5

//add10은 자신을 호출한 환경을 기억함 (x = 10)
const add10 = makeAdder(10);
console.log(add10(5)); // 15
console.log(add3(1)); // 4
