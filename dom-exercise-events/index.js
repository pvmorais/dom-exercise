// Method 2
const btn = document.querySelector('#btn');
btn.onclick = () => alert("Hello World");

// Merhod 3
const btn3 = document.querySelector('#btn3');
btn3.addEventListener('click', () => {
  alert("Hello World");
});

//METHOD 1 - named functions
function alertFunction() {
    alert("YAY! YOU DID IT!");
  }

// METHOD 2
btn.onclick = alertFunction;

// METHOD 3
btn3.addEventListener('click', alertFunction);

btn3.addEventListener('click', function (e) {
    e.target.style.background = 'blue';
});