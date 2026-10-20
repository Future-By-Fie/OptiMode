import { awardDemoCredits } from "./credits.mjs";

const toggle = document.querySelector("#opt-in");
const slider = document.querySelector("#actions");
const text = (selector, value) => { document.querySelector(selector).textContent = String(value); };

function render() {
  const optedIn = toggle.checked;
  const eligibleActions = Number(slider.value);
  const result = awardDemoCredits({ optedIn, eligibleActions });
  text("#mode", optedIn ? "ON" : "OFF");
  text("#actions-value", eligibleActions);
  text("#total", result.totalCredits);
  text("#user", result.userCredits);
  text("#platform", result.platformCredits);
  text("#explanation", optedIn
    ? "Simulation active: 70% of fictional credits go to the participating user, 30% to the platform."
    : "Community Credits are disabled. No credits are generated.");
}
toggle.addEventListener("change", render);
slider.addEventListener("input", render);
render();
