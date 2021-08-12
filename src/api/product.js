const api = `https://run.mocky.io/v3/b7d36eea-0b3f-414a-ba44-711b5f5e528e`;

export async function getProduct() {
  try {
    const response = await fetch(api);
    const allProduct = await response.json();
    return allProduct.slice(0, 6);
  } catch (error) {

    return error;
  }
}