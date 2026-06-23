export function renderInputField() {
  const inputFieldData = [
    {
      label: "Total Experiments",
      placeHolder: "e.g. 20",
      inputId: "totalExperiment",
      errorId: "totalExperimentError",
    },
    {
      label: "Average Marks",
      placeHolder: "e.g. 24.5",
      inputId: "avgMark",
      errorId: "avgMarkError",
    },
    {
      label: "Maximum Marks",
      placeHolder: "e.g. 25",
      inputId: "maxMark",
      errorId: "maxMarkError",
    },
  ];

  //   render fields
  const inputFieldContainer = document.getElementById("inputFieldContainer");
  inputFieldData.forEach((element) => {
    inputFieldContainer.innerHTML += `
            <div>
                <label class="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300">${element.label}</label>
                <input type="number" placeholder="${element.placeHolder}" id="${element.inputId}" class="w-full cursor-pointer rounded-2xl border border-slate-200 dark:border-slate-700 bg-slate-100/70 dark:bg-slate-800 px-4 py-3 text-sm sm:text-base text-slate-900 dark:text-white outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10" />
                <p id="${element.errorId}" class="ml-1 mt-1 text-sm text-red-500 hidden"></p>
            </div
    `;
  });
}
