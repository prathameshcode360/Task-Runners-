// Select the heading element
const heading = document.createElement("h1");
heading.textContent = "Hello, World!";
document.body.appendChild(heading);

// Create a button
const button = document.createElement("button");
button.textContent = "Click Me";
document.body.appendChild(button);

// Add event listener to change text on button click
button.addEventListener("click", function () {
  heading.textContent = "Text Changed!";
});
