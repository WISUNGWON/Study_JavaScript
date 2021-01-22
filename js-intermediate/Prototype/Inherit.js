// js에서 부모 객체는 자식 객체의 프로토 타입이다.
// 즉, 상속하는 부모가 프로토 타입이다.

const car = {
  wheels: 4,
  navigation: 2,
  drive() {
    console.log('drive..');
  },
};

const bmw = {
  color: 'red',
  navigation: 1,
};

const benz = {
  color: 'black',
};

const audi = {
  color: 'blue',
};

// bmw는 car의 상속을 받고 있고, car는 bmw의 프로토타입임.
bmw.__proto__ = car;
benz.__proto__ = car;
audi.__proto__ = car;

console.log(bmw); // bmw의 맴버만 출력
console.log(bmw.wheels); // 부모인 car를 상속받아서 4 출력 가능
console.log(bmw.__proto__.navigation); // 부모의 navigation인 2를 출력

// bmw에서 wheels를 찾고, 없으면 바로 위의 proto인 car에서 wheels를 찾음

// 상속은 계속 이어 질 수 있다.
const x5 = {
  color: 'white',
  name: 'x5',
};

x5.__proto__ = bmw;

console.log(x5); // x5의 맴버만 출력
console.log(x5.navigation); // 1출력 (bmw에서 찾음)

// 출력 결과는 상속한 proto의 property까지 출력
for (p in x5) {
  console.log(p);
}

// x5의 keys만 출력
console.log(Object.keys(x5));

// x5의 value만 출력
console.log(Object.values(x5));

//즉, for문으로 객체의 property를 참조할 때는
// proto의 property까지 참조하여 출력한다.

// for문 안에서 자신의 프로퍼티만 구별하고 싶을 대는
// hasOwnproperty사용

for (p in x5) {
  if (x5.hasOwnProperty(p)) {
    console.log('o', p);
  } else {
    console.log('x', p);
  }
}

// 자바스크립트는 => 프로타입 기반 OOP(객체지향)

// class 개념은 원래는 없었지.
// ES 2015 들어와서 생긴 super set 프로토타입의 class

// class vs 프로토타입

// 프로토타입
// 메모리 소모가 적음
// 프로토타입으로 bark ()

// dog1 -> bark
// dog2 ->
// dog3 ->

// 메모로 소모 적어

// class
// 인스턴스

// dog1 -> bark1
// dog2 -> bark2
