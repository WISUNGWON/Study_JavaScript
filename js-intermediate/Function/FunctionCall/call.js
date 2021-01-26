// 함수는 선언한 후 '호출'해야 실행이 됨.
// 함수를 호출하는 방법은 함수 뒤에 ()를 붙이는 것과
// call 그리고 apply하는 방법이 있음.

let example = function (a, b, c) {
  return a + b + c;
};

console.log(example(1, 2, 3));
// call은 ()호출과 똑같이 인자를 넣고, apply는 인자를 배열 하나로 묶어서 넣는다.
console.log(example.call(null, 1, 2, 3));
console.log(example.apply(null, [1, 2, 3]));

// call과 apply앞의 null은 무엇일까? = this를 대체하는 것
let obj = {
  string: 'zero',
  yell: function () {
    console.log(this.string);
  },
};

let obj2 = {
  string: 'what?',
};

obj.yell(); // 'zero'
// call function에 첫 번째 인자(this를 바꾸는)로 obj2를 주었기 때문에
// obj.yell function이 참조하는 this가 obj에서 obj2로 바뀌었고 'what?'을 출력한다.
obj.yell.call(obj2); // 'what?'

// call, apply, bind를 쓰면 첫 번째 인자값으로 다른 객체의 함수의 this를 변경 할 수 있다.

// ex) arguments 조작

// arguments는 함수라면 default로 갖고 있는 숨겨진 속성.
// 함수에 들어온 인자를 배열 형식으로 반환(배열은 아님)
// Java에서는 parameter를 설정하지 않으면 인자값을 받을 수 없지만 JS에서는 받을 수 있고 해당
// 인자값들은 arguments에 들어간다.
function exampleA() {
  console.log(arguments);
}

exampleA(1, 'string', true); //[Arguments] { '0': 1, '1': 'string', '2': true }

// arguments는 실제 배열이 아니기 때문에 배열과 관련된 메서드를 쓸 수 업다
