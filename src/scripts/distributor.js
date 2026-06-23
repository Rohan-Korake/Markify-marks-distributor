import { renderResult } from "./renderResult.js";

// global declaration
let distributionData = {};

// result object
export let resultData = {};

function initializeVariables() {
  distributionData = {
    totalMaxMarks: 0,
    totalRequiredMarks: 0,
    remainingMarks: 0,
    totalExperiment: 0,
    totalCalculatedMarks: 0,
    remainingExperiment: 0,
    maxMark: 0,
    avgMark: 0,
  };

  resultData = {};
}

function storeResultData(key, value) {
  resultData[key] = value;
}

// export function
export function handleDistribution() {
  initializeVariables();

  distributionData.totalExperiment = Number(
    document.getElementById("totalExperiment").value
  );

  distributionData.maxMark = Number(document.getElementById("maxMark").value);

  distributionData.avgMark = Number(document.getElementById("avgMark").value);

  distributionData.totalMaxMarks =
    distributionData.totalExperiment * distributionData.maxMark;

  distributionData.totalRequiredMarks =
    distributionData.totalExperiment * distributionData.avgMark;

  distributionData.remainingMarks = distributionData.totalRequiredMarks;

  distributionData.remainingExperiment = distributionData.totalExperiment;

  storeResultData("totalMarks", distributionData.totalMaxMarks);
  storeResultData("totalMarksRequired", distributionData.totalRequiredMarks);

  const assignedMarks = generateAssignedMarks();

  distributeMark(assignedMarks);
}

// generate assigned marks array
function generateAssignedMarks() {
  const assignedMarks = [];

  assignedMarks[0] = Math.floor(distributionData.avgMark - 1);
  assignedMarks[1] = Math.floor(distributionData.avgMark);

  if (distributionData.avgMark < distributionData.maxMark) {
    assignedMarks[2] = Math.floor(distributionData.avgMark + 1);
  }

  storeResultData("lowMark", assignedMarks[0]);
  storeResultData("midMark", assignedMarks[1]);
  storeResultData("highMark", assignedMarks[2] ?? "00");

  // give one experiment to each mark
  for (const mark of assignedMarks) {
    distributionData.totalCalculatedMarks += mark;
    distributionData.remainingMarks -= mark;
    distributionData.remainingExperiment--;
  }

  return assignedMarks;
}

function distributeMark(assignedMarks) {
  let arrayIndex = 0;

  const distribution = {};

  // initialize counts
  for (const mark of assignedMarks) {
    distribution[mark] = 0;
  }

  // Step 1: Distribute evenly (23,24,25,23,24,25...)
  let currentTotal = 0;

  for (let i = 0; i < distributionData.totalExperiment; i++) {
    const mark = assignedMarks[arrayIndex];

    distribution[mark]++;
    currentTotal += mark;

    arrayIndex++;

    if (arrayIndex >= assignedMarks.length) {
      arrayIndex = 0;
    }
  }

  const requiredTotal = distributionData.totalRequiredMarks;
  let difference = requiredTotal - currentTotal;

  // adjust to reach exact required total
  while (difference > 0) {
    let adjusted = false;

    // Try low -> mid
    if (assignedMarks.length >= 2 && distribution[assignedMarks[0]] > 0) {
      distribution[assignedMarks[0]]--;
      distribution[assignedMarks[1]]++;
      difference -= assignedMarks[1] - assignedMarks[0];
      adjusted = true;
    }

    if (difference <= 0) break;

    // Try mid -> high
    if (assignedMarks.length === 3 && distribution[assignedMarks[1]] > 0) {
      distribution[assignedMarks[1]]--;
      distribution[assignedMarks[2]]++;
      difference -= assignedMarks[2] - assignedMarks[1];
      adjusted = true;
    }

    if (!adjusted) break;
  }

  while (difference < 0) {
    let adjusted = false;

    // Try high -> mid
    if (assignedMarks.length === 3 && distribution[assignedMarks[2]] > 0) {
      distribution[assignedMarks[2]]--;
      distribution[assignedMarks[1]]++;
      difference += assignedMarks[2] - assignedMarks[1];
      adjusted = true;
    }

    if (difference >= 0) break;

    // Try mid -> low
    if (assignedMarks.length >= 2 && distribution[assignedMarks[1]] > 0) {
      distribution[assignedMarks[1]]--;
      distribution[assignedMarks[0]]++;
      difference += assignedMarks[1] - assignedMarks[0];
      adjusted = true;
    }

    if (!adjusted) break;
  }

  // Calculate final total
  let finalTotal = 0;

  for (const mark in distribution) {
    finalTotal += Number(mark) * distribution[mark];
  }

  distributionData.totalCalculatedMarks = finalTotal;
  distributionData.remainingMarks =
    distributionData.totalRequiredMarks - finalTotal;
  distributionData.remainingExperiment = 0;

  const values = Object.values(distribution);
  storeResultData("lowMarkCount", values[0]);
  storeResultData("midMarkCount", values[1]);
  if (values[2]) {
    storeResultData("highMarkCount", values[2]);
  }

  storeResultData("roundedAvg", Math.ceil(distributionData.avgMark));
  renderResult(resultData);
}
