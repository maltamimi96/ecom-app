import React from "react"

const AddProductForm = () => {
  return (
    <div className=" bg-slate-200 mx-auto p-4">
      <h2 className="text-xl font-semibold mb-4">Add New Product</h2>
      <form className="space-y-4">
        <div>
          <label htmlFor="name" className="block mb-1">
            Name
          </label>
          <input type="text" id="name" className="twInput" required />
        </div>
        <div>
          <label htmlFor="description" className="block mb-1">
            Description
          </label>
          <textarea id="description" className="twInput" required />
        </div>
        <div>
          <label htmlFor="price" className="block mb-1">
            Price
          </label>
          <input type="number" id="price" className="twInput" required />
        </div>
        <div>
          <label htmlFor="currency" className="block mb-1">
            Currency
          </label>
          <input type="text" id="currency" className="twInput" required />
        </div>
        <div>
          <label htmlFor="category" className="block mb-1">
            Category
          </label>
          <input type="text" id="category" className="twInput" required />
        </div>
        <div>
          <label htmlFor="brand" className="block mb-1">
            Brand
          </label>
          <input type="text" id="brand" className="twInput" required />
        </div>
        <div>
          <label htmlFor="availability" className="block mb-1">
            Availability
          </label>
          <input type="checkbox" id="availability" className="mr-2" />
          <span className="text-gray-700">Available</span>
        </div>
        <div>
          <label htmlFor="stock" className="block mb-1">
            Stock
          </label>
          <input type="number" id="stock" className="twInput" required />
        </div>
        <div>
          <label htmlFor="image" className="block mb-1">
            Upload Image
          </label>
          <input type="file" id="image" className="twInput" />
        </div>
        <div className="flex space-x-2">
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Add Product
          </button>
          <button
            type="button"
            className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400">
            Clear
          </button>
        </div>
      </form>
    </div>
  )
}

export default AddProductForm
