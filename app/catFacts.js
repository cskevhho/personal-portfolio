export async function getCatFact() {
    const response = await fetch('https://catfact.ninja/fact');
    const data = await response.json();
    return data.fact;
  }