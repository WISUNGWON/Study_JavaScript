/*
prototypes are the mechanism by which JavaScript Objects 
inherit features from one another.
*/

// 프로토타입의 사전적 정의 : 원래의 형태, 전형적인 예, 기초 또는 표준

// __proto__ 란?

const user = {
  name: 'Mike',
};

console.log(user.name);

//hasOwnProperty: 객체 자신이 가지고 있는 property를 확인하여 boolean 리턴
console.log(user.hasOwnProperty('name')); // true

console.log(user.hasOwnProperty('age')); // false

//hasOwnProperty는 user에서 만든적이 없는데 어디서 참조하는 것일까?
console.log(user);

// 객체는 default로 base __proto__ 객체를 상속받음.
// hasOwnProperty는 base __proto__의 property로서 user에서 없으면
// base __proto__를 참조해서 실행하는 것임

// __proto__는 Java로 치면 Object.lang같은 것. 객체의 최상위 객체
// js에서는 부모 객체를 자식 객체의 프로토타입이라고 한다.

// 부모 (자식의 프로토타입) <- 자식
