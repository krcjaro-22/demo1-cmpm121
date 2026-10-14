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
  counterElement.textContent = Math.floor(counter).toString();
}

//input handling
//each click grows one leaf
button.addEventListener("click", () => { 
  counter += 1;//update state
  render(); //show new state
});

//timed growth
//leaves grown per second, no matter how fast the screen refreshes
const growthRate: number = 1;

//time of prev frame in milliseconds
let lastTime = performance.now();

//runs once per frame. grow leaves based on seconds elapsed,
//so 60hz and 114hz screen grow at the same speed
function tick(now: number) { 
  const secondsElapsed = (now - lastTime) / 1000;
  lastTime = now;

  counter += growthRate * secondsElapsed;
  render();

  requestAnimationFrame(tick);//schedule next frame
}
requestAnimationFrame(tick);