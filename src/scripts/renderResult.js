export async function renderResult(resultData) {
  for (const [key, value] of Object.entries(resultData)) {
    const element = document.getElementById(key);
    element.innerText = value;
  }
}
