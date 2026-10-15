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

// Create basic HTML structure
document.body.innerHTML = `
  <h1>CMPM 121 Project</h1>
  <p>Counter: <span id="counter">0</span></p>
  <button id="increment">Grow!</button>
`;

// Add click handler
const button = document.getElementById("increment")!;
const counterElement = document.getElementById("counter")!;

const pizzaImage = document.createElement("img");
pizzaImage.src = pizza;
pizzaImage.alt = "Small pizza";
button.replaceChildren(pizzaImage);

//display:deno
//show current number of pizzas on the page
function render() {
  counterElement.textContent = Math.floor(counter).toString();
}

//input handling
//each click grows one pizza
button.addEventListener("click", () => { 
  counter += 1;//update state
  render(); //show new state
});

//timed growth
//pizzas made per second, no matter how fast the screen refreshes
const growthRate: number = 1;

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

