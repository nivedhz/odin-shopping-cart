const API_URL = "https://dummyjson.com/products";

export async function getProducts() {
  const response = await fetch(API_URL);
  if (!response.ok)
    throw new Error(`Http Error, Status code: ${response.status}`);
  const result = await response.json();

  return result;
}
