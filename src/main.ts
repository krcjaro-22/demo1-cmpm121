/**
 * Main entry point for the CMPM 121 Section Activity
 * Simple starter template - customize to your heart's content!
 */

console.log("🎮 CMPM 121 - Starting...");

// Simple counter for demonstration
// deno-lint-ignore prefer-const
let counter: number = 0;

// Create basic HTML structure
document.body.innerHTML = `
  <h1>CMPM 121 Project</h1>
  <p>Counter: <span id="counter">0</span></p>
  <button id="increment">Grow!</button>
`;

// Add click handler
const button = document.getElementById("increment")!;
const counterElement = document.getElementById("counter")!;

button.addEventListener("click", () => {
  counter += 1; //update state
  counterElement.textContent = counter.toString(); //show new state
  
});

//display:
//show current number of leaves on the page
function render() { 
  counterElement.textContent = counter.toString();
}

//input handling
//each click grows one leaf
button.addEventListener("click", () => { 
  counter += 1;//update state
  render(); //show new state
});

//timed growth
//every 1000 ms (1 second), one leaf grows automatically
setInterval(() => { 
  counter += 1;
  render();
}, 1000);