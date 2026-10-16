/**
 * Main entry point for the CMPM 121 Section Activity
 * Simple starter template - customize to your heart's content!
 */
import "./style.css";

import cheese from "./assets/cheese.png?no-inline";
import tomato from "./assets/tomato.png?no-inline";
import slice from "./assets/pizza-slice.png?no-inline";
import pizza from "./assets/whole-pizza.png?no-inline";
import oven from "./assets/oven.png?no-inline";

console.log("🎮 CMPM 121 - Starting...");

// Simple counter for demonstration
// how many pizzas the player has
let counter: number = 0;

// page layout
document.body.innerHTML = `
  <h1>Pizza Empire</h1>
  <p><img src="${slice}" width="32" alt=""> <span id="counter">0</span> pizzas</p>
  <p><span id="rate">0</span> pizzas/sec</p>
  <button id="increment"></button>
  <div>
    <button id="tomato">
      <img src="${tomato}" width="40" alt=""> <span id="tomato-label"></span>
    </button>
    <button id="cheese">
      <img src="${cheese}" width="40" alt=""> <span id="cheese-label"></span>
    </button>
    <button id="oven">
      <img src="${oven}" width="40" alt=""> <span id="oven-label"></span>
    </button>
  </div>
`;

// Add click handler
const button = document.getElementById("increment")!;
const counterElement = document.getElementById("counter")!;

const rateElement = document.getElementById("rate")!;
const tomatoButton = document.getElementById("tomato") as HTMLButtonElement;
const cheeseButton = document.getElementById("cheese") as HTMLButtonElement;
const ovenButton = document.getElementById("oven") as HTMLButtonElement;
const tomatoLabel = document.getElementById("tomato-label")!;
const cheeseLabel = document.getElementById("cheese-label")!;
const ovenLabel = document.getElementById("oven-label")!;

const pizzaImage = document.createElement("img");

pizzaImage.src = pizza;
pizzaImage.alt = "Small pizza";
button.replaceChildren(pizzaImage);
const tomatoCost: number = 10;
let tomatoesOwned: number = 0;

const cheeseCost: number = 100;
let cheeseOwned: number = 0;

const ovenCost: number = 1000;
let ovenOwned: number = 0;
//display:deno
//show current number of pizzas on the page
function render() {
  counterElement.textContent = Math.floor(counter).toString();
  rateElement.textContent = growthRate.toString();

  tomatoLabel.textContent =
    `Tomato Garden (owned: ${tomatoesOwned}): ${tomatoCost} pizzas, +1/sec`;
  tomatoButton.disabled = counter < tomatoCost;

  cheeseLabel.textContent =
    `Cheese Supplier (owned: ${cheeseOwned}): ${cheeseCost} pizzas, +12/sec`;
  cheeseButton.disabled = counter < cheeseCost;

  ovenLabel.textContent =
    `Brick Oven (owned: ${ovenOwned}) ${ovenCost} pizzas, +150/sec`;
  ovenButton.disabled = counter < ovenCost;
}

//input handling
//each click grows one pizza
button.addEventListener("click", () => { 
  counter += 1;// update state
  render(); // show new state
});

tomatoButton.addEventListener("click", () => { 
  if (counter < tomatoCost) return; // can't afford then do nothing
  counter -= tomatoCost;// pay cost
  tomatoesOwned += 1;
  growthRate += 1;// lasting effect
  render();
});

cheeseButton.addEventListener("click", () => { 
  if (counter < cheeseCost) return; // can't afford then do nothing
  counter -= cheeseCost;// pay cost
  cheeseOwned += 1;
  growthRate += 12;// lasting effect
  render();
});

ovenButton.addEventListener("click", () => { 
  if (counter < ovenCost) return; // can't afford then do nothing
  counter -= ovenCost;// pay cost
  ovenOwned += 1;
  growthRate += 150;// lasting effect
  render();
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

  requestAnimationFrame(tick);// schedule next frame
}
requestAnimationFrame(tick);

