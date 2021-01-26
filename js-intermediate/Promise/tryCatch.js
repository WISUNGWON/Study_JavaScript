// error handle in async

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function getApple() {
  await delay(1000);
  throw 'error';
  return 'apple';
}

async function getBanana() {
  await delay(1000);
  return 'Banana';
}

async function pickFruits() {
  try {
    const apple = await getApple();
    const banana = await getBanana();
    return `${apple} + ${banana}`;
  } catch (e) {
    console.log(e);
  } finally {
    // code..
  }
}

pickFruits().then(console.log);
