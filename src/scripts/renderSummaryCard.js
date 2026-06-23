export function renderSummaryCard() {
  const summaryCardData = [
    {
      title: "Total Marks Required",
      valueId: "totalMarksRequired",
      description: "Marks needed to achieve target average.",
    },
    {
      title: "Maximum Possible Marks",
      valueId: "totalMarks",
      description: "Total experiments x maximum marks.",
    },
  ];

  //   render cards
  const summaryContainer = document.getElementById("summaryContainer");
  summaryCardData.forEach((element) => {
    summaryContainer.innerHTML += `
    <div class="rounded-3xl bg-white/80 dark:bg-slate-800 p-5 shadow-xl border border-slate-200 dark:border-slate-700 text-center transition duration-300 hover:-translate-y-1 hover:shadow-lg">
        <p class="text-sm font-medium text-slate-500">${element.title}</p>
        <h3 id="${element.valueId}" class="mt-2 text-4xl font-bold text-slate-900 dark:text-white">00</h3>
        <p class="mt-1 text-sm text-slate-500">${element.description}</p>
    </div>
    `;
  });
}
