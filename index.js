// Get the body element
const body = document.querySelector("body");

// Create a <p> element with red text
const p = document.createElement("p");
p.textContent = "Hey I am red!";
p.style.color = "red";
body.appendChild(p);

// Create an <h3> element with blue text
const h3 = document.createElement("h3");
h3.textContent = "I am a blue h3!";
h3.style.color = "blue";
body.appendChild(h3);

// Create a <div> element with a black border and pink background color
const div = document.createElement("div");
div.style.border = "1px solid black";
div.style.backgroundColor = "pink";

// Create an <h1> element inside the <div>
const h1 = document.createElement("h1");
h1.textContent = "I am in a div";
div.appendChild(h1);

// Create a <p> element inside the <div>
const p2 = document.createElement("p");
p2.textContent = "ME TOO!";
div.appendChild(p2);

// Add the <div> to the body
body.appendChild(div);