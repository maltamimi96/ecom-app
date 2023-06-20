// Sort products based on the selected sort type
export const sortProducts = (products, sortType) => {
  return [...products].sort((a, b) => {
    if (sortType === "name") {
      return a.name.localeCompare(b.name)
    } else if (sortType === "price") {
      return a.price - b.price
    }
  })
}

// Filter products based on the selected category
export const filterProducts = (products, category) => {
  return category
    ? products.filter((product) => product.category === category)
    : products
}
