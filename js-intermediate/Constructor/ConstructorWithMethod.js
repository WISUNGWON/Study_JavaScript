// 생성자 함수 : 상품 객체를 생성.
function Item(title, price) {
  // this = {}
  this.title = title;
  this.price = price;
  this.showPrice = function () {
    console.log(`가격은 ${price}원 입니다.`);
  };
  // return this;
}

const item1 = new Item('인형', 3000);
const item2 = Item('차', 6000); // 생성자 함수 호출이 아닌 그냥 함수 호출 => return 값이 없으므로 undefined 호출
// 또한 Item'함수'가 실행되므로 Item 함수 안의 this.title이 실행되면서 this가 가르키는 window객체에 title을 추가 하게 됨.
const item3 = new Item('초콜릿', 9000);

// 위와 같은 생성자 함수는 ES2015에서 다음과 같이 class를 사용한 constructor로 명시
class Item2 {
  title;
  price;

  constructor(title, price) {
    // this = {}
    this.title = title;
    this.price = price;
    // return this;
  }

  showPrice = function () {
    console.log(`${this.title}의 가격은 ${this.price}원 입니다.`);
  };
}

class Item3 extends Item2 {
  showPrice() {
    console.log('수박');
  }
}

console.log('메롱메롱');
const itemX = new Item3('뱀', 9000);
itemX.showPrice();
