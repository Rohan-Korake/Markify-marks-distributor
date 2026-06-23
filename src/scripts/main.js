import { handleDistribution } from "./distributor.js";
import { hideLoader, showLoader } from "./handleLoader.js";
import { renderDistributionCard } from "./renderDistributionCard.js";
import { renderInputField } from "./renderInputField.js";
import { renderSocialLink } from "./renderSocialLink.js";
import { renderSummaryCard } from "./renderSummaryCard.js";
import { validateInput } from "./validateInput.js";

document.addEventListener("DOMContentLoaded", async () => {
  showLoader();
  renderInputField();
  renderSummaryCard();
  renderDistributionCard();
  renderSocialLink();
  await sleep(2000);
  hideLoader();
});

const distributeButton = document.getElementById("distributeButton");
distributeButton.addEventListener("click", async () => {
  if (validateInput()) {
    await handleDistribution();
  }
});

// Sleep helper
export function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
