"use client"
import React, { useState } from "react"

// Sample product data
const products = [
  { id: 1, name: "Product A", category: "Electronics", price: 99.99 },
  { id: 2, name: "Product B", category: "Clothing", price: 49.99 },
  { id: 3, name: "Product C", category: "Electronics", price: 149.99 },
  { id: 4, name: "Product D", category: "Books", price: 19.99 },
]

const ProductList = () => {
  // State variables
  const [sortType, setSortType] = useState("name") // Sort type ('name' or 'price')
  const [filterCategory, setFilterCategory] = useState("") // Filter category

  // Sort products based on the selected sort type
  const sortedProducts = [...products].sort((a, b) => {
    if (sortType === "name") {
      return a.name.localeCompare(b.name)
    } else if (sortType === "price") {
      return a.price - b.price
    }
  })

  // Filter products based on the selected category
  const filteredProducts = filterCategory
    ? sortedProducts.filter((product) => product.category === filterCategory)
    : sortedProducts

  // Update the sort type state
  const handleSortChange = (e) => {
    setSortType(e.target.value)
  }

  // Update the filter category state
  const handleFilterChange = (e) => {
    setFilterCategory(e.target.value)
  }

  return (
    <div>
      {/* Sort dropdown */}
      <label htmlFor="sort">Sort by:</label>
      <select id="sort" value={sortType} onChange={handleSortChange}>
        <option value="name">Name</option>
        <option value="price">Price</option>
      </select>

      {/* Filter dropdown */}
      <label htmlFor="filter">Filter by category:</label>
      <select id="filter" value={filterCategory} onChange={handleFilterChange}>
        <option value="">All</option>
        <option value="Electronics">Electronics</option>
        <option value="Clothing">Clothing</option>
        <option value="Books">Books</option>
      </select>

      {/* Product list */}
      <ul>
        {filteredProducts.map((product) => (
          <li key={product.id}>
            <span>{product.name}</span> - <span>{product.category}</span> -{" "}
            <span>${product.price.toFixed(2)}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ProductList
