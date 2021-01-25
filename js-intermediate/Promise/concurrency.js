function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function getApple() {
  await delay(1000);
  return 'apple';
}

async function getBanana() {
  await delay(1000);
  return 'Banana';
}

function getBanana() {
  return delay(1000).then(() => 'Banana');
}

async function pickFruits2() {
  const applePromise = getApple();
  const bananaPromise = getBanana();
  const apple = await applePromise();
  const banana = await bananaPromise();
  return `${apple} + ${banana}`;
}

// Promise Apis

function pickallFruits() {
  return Promise.all([getApple(), getBanana()]).then((fruits) =>
    fruits.join(' + ')
  );
}

pickallFruits().then(console.log);

function pickOnlyOne() {
  return Promise.race([getApple(), getBanana()]);
}

pickOnlyOne().then(console.log);
