// Replace with your desired list of texts
const texts = ["THINK CREATIVELY", "THINK OUT OF THE BOX", "EXPLORE MORE", "GO WILD" ,"EXCLUSIVE","INTERACTIVE","SMARTWORK"];

function generateTextPop() {
  const textElement = document.createElement("span");
  textElement.classList.add("text-pop");
  textElement.textContent = texts[Math.floor(Math.random() * texts.length)];

  // Generate random position within the background
  const xPos = Math.random() * (window.innerWidth - textElement.clientWidth);
  const yPos = Math.random() * (window.innerHeight - textElement.clientHeight);
  textElement.style.left = `${xPos}px`;
  textElement.style.top = `${yPos}px`;

  document.querySelector(".background").appendChild(textElement);

  // Simulate a delay before removing the element (adjust as needed)
  setTimeout(() => {
    textElement.remove();
  }, 2000);
}

// Call the function to generate text pops at intervals
setInterval(generateTextPop, 1000); // Creates a text pop every second
