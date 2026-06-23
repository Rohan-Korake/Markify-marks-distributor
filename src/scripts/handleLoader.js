const loader = document.getElementById("loader");
const mainContent = document.getElementById("mainContent");

export function showLoader() {
  loader.classList.remove("hidden");
  mainContent.classList.add("opacity-0");
}

export function hideLoader() {
  loader.classList.add("hidden");
  mainContent.classList.remove("opacity-0");
}
