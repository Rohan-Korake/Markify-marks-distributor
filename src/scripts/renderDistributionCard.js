export function renderDistributionCard() {
  const distributionCardData = [
    {
      markId: "lowMark",
      countId: "lowMarkCount",
      textColor: "text-blue-600",
    },
    {
      markId: "midMark",
      countId: "midMarkCount",
      textColor: "text-emerald-600",
    },
    {
      markId: "highMark",
      countId: "highMarkCount",
      textColor: "text-violet-600",
    },
  ];

  //   render cards
  const distributionCardContainer = document.getElementById(
    "distributionCardContainer"
  );
  distributionCardData.forEach((element) => {
    distributionCardContainer.innerHTML += `
          <div class="rounded-3xl border border-amber-100 dark:border-slate-700 bg-emerald-50/80 dark:bg-slate-800 p-4 sm:p-4 text-center transition duration-300 hover:-translate-y-1 hover:shadow-lg">
            <h3 class="text-lg font-bold ${element.textColor}"><span id="${element.markId}">00</span> Marks</h3>
            <p id="${element.countId}" class="mt-4 text-4xl sm:text-4xl font-bold text-slate-900 dark:text-white">00</p>
            <p class="mt-2 text-slate-500">times</p>
          </div>
    `;
  });
}
