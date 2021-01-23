'use strict';

// Promise is a JavaScript object for asynchronous operation.
// state: pending -> fulfilled or rejected
// Producer vs Consumer

//1. Producer
// excutor(resolve, reject)
// promise를 만드는 순간 excutor 실행
const promise = new Promise((resolve, reject) => {
  // doing some heavy work ()
  console.log('doing something...');
  setTimeout(() => {
    // resolve('ellie');
    // Error: js 제공 object
    reject(new Error('no network'));
  }, 2000);
});

// then도 promise또는 값을 리턴함 따라서 promise의 catch 사용 가능
// chaining
promise
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log('finally');
  });

//Uncaught : handlling 하지 않은 에러임 (프로그램ㄷ ㅏ운)
// catch를하면 error핸들 가능

// 3. Promise chaining
const fetchNumber = new Promise((resolve, reject) => {
  setTimeout(() => resolve(1), 1000);
});

// fetchNumber.then((num) => num * 2).then((num) => num * 3).then(new => )

// 4. error handling
