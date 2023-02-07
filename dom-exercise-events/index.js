// Method 2
const btn = document.querySelector('#btn');
btn.onclick = () => alert("Hello World");

// Merhod 3
const btn3 = document.querySelector('#btn3');
btn3.addEventListener('click', () => {
  alert("Hello World");
});