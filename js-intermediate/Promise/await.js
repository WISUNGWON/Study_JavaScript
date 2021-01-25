// await
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function getApple() {
  // async안에서 사용 가능
  // promise의 사용을 chaining방식이 아닌 일반적인 코드 작성 방식으로 해줌
  await delay(3000);
  return 'apple';
}

async function getBanana() {
  await delay(3000);
  return 'Banana';
}

//chaining 방식
function getBanana() {
  return delay(3000).then(() => 'Banana');
}

function pickFruits() {
  return getApple().then((apple) => {
    getBanana().then((banana) => `${apple} + ${banana}`);
  });
}

pickFruits().then(console.log);

async function pickFruits2() {
  const apple = await getApple();
  const banana = await getBanana();
  return `${apple} + ${banana}`;
}

pickFruits().then(console.log);
