function fetchUser() {
  // do network request in 10 secs...
  console.log(user);
  return 'wi';
}

const user = fetchUser(); // 비동기 처리를 하지 않으면 여기서 10초 기다림
console.log('다른작업');

// Promise
function fetchuser() {
  return new Promise((resolve, reject) => {
    // block안의 code는 비동기적으로 실행
    // resolve, reject를 이용해서 pending을 fulfill로 바꿔야 함
    // netword
    resolve('wi');
  });
}

const user = fetchUser();
user.then(console.log(user));
console.log(user);

// async
async function fetchUser3() {
  // do network request in 10 secs...
  return 'wi'; // async안의 리턴값은 promise
}

const user3 = fetchuser3();
user3.then(console.log(user3));
console.log(user3);
