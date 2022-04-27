export async function getCategories() {
  const promisse = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
  const data = await promisse.json();
  return data;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  const promisse = await fetch(` https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`);
  const data = await promisse.json();
  return data;
}

export async function getProductsId(productId) {
  const promisse = await fetch(`https://api.mercadolibre.com/items/${productId}`);
  const data = await promisse.json();
  return data;
}
