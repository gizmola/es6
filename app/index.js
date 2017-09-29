async function async_one() {
  return 'one';
}

async function async_two() {
  throw new Error('Issue with async!');
}

async_one().then(response => console.log(response));
async_two().catch(error => console.log(error));
