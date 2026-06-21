export function validateInput() {
  const totalExperiment = document.getElementById("totalExperiment").value;
  const maxMark = document.getElementById("maxMark").value;
  const avgMark = document.getElementById("avgMark").value;
  const totalExperimentError = document.getElementById("totalExperimentError");
  const maxMarkError = document.getElementById("maxMarkError");
  const avgMarkError = document.getElementById("avgMarkError");

  const isNumber = (val) => !isNaN(val);
  const isPositive = (val) => Number(val) > 0;
  const isInteger = (val) => {
    return /^[0-9]+$/.test(val);
  };

  // TOTAL EXPERIMENT
  if (!totalExperiment) {
    showError(totalExperimentError, "Field required.");
    return false;
  } else if (!isNumber(totalExperiment)) {
    showError(totalExperimentError, "Enter a number.");
    return false;
  } else if (!isPositive(totalExperiment)) {
    showError(totalExperimentError, "Must be positive.");
    return false;
  } else if (!isInteger(totalExperiment)) {
    showError(totalExperimentError, "Integers only.");
    return false;
  } else {
    hideError(totalExperimentError);
  }

  // AVG MARK
  if (!avgMark) {
    showError(avgMarkError, "Field required.");
    return false;
  } else if (!isNumber(avgMark)) {
    showError(avgMarkError, "Enter a number.");
    return false;
  } else if (!isPositive(avgMark)) {
    showError(avgMarkError, "Must be positive.");
    return false;
  } else {
    hideError(avgMarkError);
  }

  // MAX MARK
  if (!maxMark) {
    showError(maxMarkError, "Field required.");
    return false;
  } else if (!isNumber(maxMark)) {
    showError(maxMarkError, "Enter a number.");
    return false;
  } else if (!isPositive(maxMark)) {
    showError(maxMarkError, "Must be positive.");
    return false;
  } else if (!isInteger(maxMark)) {
    showError(maxMarkError, "Integers only.");
    return false;
  } else if (avgMark > maxMark) {
    showError(maxMarkError, "Must be at least the average.");
    return false;
  } else {
    hideError(maxMarkError);
  }

  return true;
}

// show error block
function showError(element, message) {
  element.classList.remove("hidden");
  element.innerText = message;
}

// hide the error block
function hideError(element) {
  element.innerText = "";
  element.classList.toggle("hidden");
}
