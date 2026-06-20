import { handleDistribution } from "./distributor.js";
import { validateInput } from "./validateInput.js";

document.addEventListener("DOMContentLoaded", async () => {});

const distributeButton = document.getElementById("distributeButton");
distributeButton.addEventListener("click", async () => {
  if (validateInput()) {
    await handleDistribution();
  }
});
