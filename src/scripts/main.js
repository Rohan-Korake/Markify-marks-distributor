import { handleDistribution } from "./distributor.js";
import { renderDistributionCard } from "./renderDistributionCard.js";
import { renderInputField } from "./renderInputField.js";
import { renderSocialLink } from "./renderSocialLink.js";
import { renderSummaryCard } from "./renderSummaryCard.js";
import { validateInput } from "./validateInput.js";

document.addEventListener("DOMContentLoaded", async () => {
  renderInputField();
  renderSummaryCard();
  renderDistributionCard();
  renderSocialLink();
});

const distributeButton = document.getElementById("distributeButton");
distributeButton.addEventListener("click", async () => {
  if (validateInput()) {
    await handleDistribution();
  }
});
