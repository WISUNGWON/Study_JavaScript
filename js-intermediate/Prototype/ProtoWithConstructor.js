// Proto타입 사용으로 상속받는 자식들의 메모리 절약

function Developer(lang) {
  this.lang = lang;

  //메서드 정의
  Developer.prototype.setLang = function (lang) {
    this.lang = lang;
  };

  Developer.prototype.getLang = function () {
    return this.lang;
  };
}

var frontEnd = new Developer('Javascript');
var backEnd = new Developer('Java');
console.log('================= 경계');
console.log(frontEnd === backEnd); // false
console.log('================= 경계2');
// 같은 proto의 getLang을 바라보기 때문에 true
console.log(frontEnd.getLang === backEnd.getLang); // true
console.log(frontEnd.getLang()); //Javascript
console.log(backEnd.getLang()); //Java

backEnd.setLang('Node.js');

console.log(backEnd.getLang()); //Node.js
