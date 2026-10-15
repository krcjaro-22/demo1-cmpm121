/**
 * Main entry point for the CMPM 121 Section Activity
 * Simple starter template - customize to your heart's content!
 */

console.log("🎮 CMPM 121 - Starting...");

// Simple counter for demonstration
// how many pizzas the player has
let counter: number = 0;

// Create basic HTML structure
document.body.innerHTML = `
  <h1>Pizza Empire</h1>
  <p>Counter: <span id="counter">0</span> pizzas </p>
  <button id="increment">Make pizza</button>
  <button id="upgrade">Hire line cook (+1 pizza/sec): 10 pizzas</button>
`;

// Add click handler
const button = document.getElementById("increment")!;
const counterElement = document.getElementById("counter")!;
const upgradeButton = document.getElementById("upgrade") as HTMLButtonElement;

//display:
//show current number of pizzas on the page
function render() { 
  counterElement.textContent = Math.floor(counter).toString();
  upgradeButton.disabled = counter < upgradeCost;
}

//input handling
//each click grows one pizza
button.addEventListener("click", () => { 
  counter += 1;//update state
  render(); //show new state
});

//timed growth
//pizzas made per second, no matter how fast the screen refreshes
let growthRate: number = 0;

//time of prev frame in milliseconds
let lastTime = performance.now();

//runs once per frame. made pizzas based on seconds elapsed,
//so 60hz and 144hz screen grow at the same speed
function tick(now: number) { 
  const secondsElapsed = (now - lastTime) / 1000;
  lastTime = now;

  counter += growthRate * secondsElapsed;
  render();

  requestAnimationFrame(tick);//schedule next frame
}
requestAnimationFrame(tick);

//upgrade: line cook
//cost of one line cook in pizzas
const upgradeCost: number = 10;

//hiring cook spends pizzas and permanently adds 1 pizza/sec
upgradeButton.addEventListener("click", () => { 
  if (counter < upgradeCost) return; //can't afford it, do nothing
  counter -= upgradeCost; //pay cost
  growthRate += 1; //add lasting effect
  render();
});