// 객체 리터럴

let user = {
  name: 'Mike',
  age: 30,
};

/* 개발을 하다보면 비슷한 객체를 
여러개 생성해야 할 때가 있음
*/

// 생성자 함수

// 생성자 함수명은 대문자로 시작
function User(name, age) {
  this.name = name;
  this.age = age;
}

// 생성자 함수는 new 연산자를 사용해서 호출
// 생성자 함수를 통해 같은 틀의 다른 객체 생성
let user1 = new User('Mike', 30);
let user2 = new User('Tom', 22);
let user3 = new User('Jin', 17);

console.log(user1);
console.log(user2);
console.log(user3);

// 생성자 함수의 동작

//1) new로 생성자 실행
let user4 = new User('Mike', 30);

//2) 빈 객체를 만들고 this에 할당
function User(name, age) {
  // this = {}
  // 3) 함수의 본문을 실행하면서 this에 프로퍼티(name, age)를 할당
  this.name = name;
  this.age = age;

  // return this 4) this를 반환
}

// new 생성자 실행을 통해 1) ~ 4)의 절차로 새로운 객체를 만들어줌 (내부 동작)

// 객체 리터럴로 생성하는 것보다 빠르고 일관성 있게 객체 생성 가능

// 생성자 함수를 통해 생성된 객체들은 다른 값을 참조함.
console.log(user1 === user2);
