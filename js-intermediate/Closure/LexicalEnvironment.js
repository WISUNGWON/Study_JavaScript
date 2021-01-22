// 1. 어휘적 환경(Lexical Environment)

/* 파일이 실행되면, 호이스팅 되어 선언된 변수와 메서드는 
전역 렉시컬 환경에 할당됨.

one, addOne이 전역 환경에 들어가며
one은 초기화가 되어 있지않으므로 사용 불가, addOne은 값이 있으므로
사용가능함 

다음으로 코드를 한줄 한줄 읽어나감.
첫 줄에서 let one을 만나면 one에 undefined를 할당하여 실행 가능해짐
*/
let one;
one = 1;

function addOne(num) {
  console.log(one + num);
}

addOne(5);
