const storeBtn = document.getElementById('store-btn');
const retrBtn = document.getElementById('retrieve-btn');

storeBtn.addEventListener('click', () => {
  const userId = 'u123';
  const user = { name: 'Max', age: 30 };
  document.cookie = `uid=${userId}; max-age=2`;
  document.cookie = `user=${JSON.stringify(user)}`;
});

retrBtn.addEventListener('click', () => {
  console.log(document.cookie);
  console.log(document.cookie.split(';')); // in the array space is coming for second item means index 1
  const cookieData = document.cookie.split(';');
  const data = cookieData.map((i) => i.trim());
  console.log(data); // removed space
  console.log(data[1].split('=')[1]); // user value
});
