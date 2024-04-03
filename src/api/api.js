// api.js

const API_KEY = '7d8fe3c008ac455cad14fe057ebd94ff';

export async function getAIHeadlines() {
  const response = await fetch(`https://newsapi.org/v2/everything?q=ai&language=tr&apiKey=${API_KEY}`);
  const data = await response.json();
  return data.articles;
}
