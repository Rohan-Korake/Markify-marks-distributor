// global declaration
let totalRequiredMarks = 0;
let remainingExperiment = 0;

// export function
export async function handleDistribution() {
  const totalExperiment = Number(
    document.getElementById("totalExperiment").value
  );
  const maxMark = Number(document.getElementById("maxMark").value);
  const avgMark = Number(document.getElementById("avgMark").value);
  const totalMaxMarks = totalExperiment * maxMark;
  await storeResultData("totalMarks", totalMaxMarks);
  totalRequiredMarks = totalExperiment * avgMark;
  await storeResultData("totalMarksRequired", totalRequiredMarks);
  remainingExperiment = totalExperiment;

  //   generate assinged marks array
  let assignedMarks = generateAssignedMarks(avgMark, maxMark);

  console.log(remainingExperiment);
  console.log(totalRequiredMarks);
  console.log(assignedMarks);
}

// store the result data
export let resultData = {};
function storeResultData(key, value) {
  resultData[key] = value;
}

// generate assinged marks array
function generateAssignedMarks(avgMark, maxMark) {
  let assignedMarks = [];

  assignedMarks[0] = Math.floor(avgMark - 1);
  totalRequiredMarks -= Math.floor(assignedMarks[0]);
  remainingExperiment--;

  assignedMarks[1] = Math.floor(avgMark);
  totalRequiredMarks -= Math.floor(assignedMarks[1]);
  remainingExperiment--;

  if (avgMark < maxMark) {
    assignedMarks[2] = Math.floor(avgMark + 1);
    totalRequiredMarks -= Math.floor(assignedMarks[2]);
    remainingExperiment--;
  }
  return assignedMarks;
}
