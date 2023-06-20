import React from "react"
import AddProductForm from "../components/products/AddProductForm"
import ProductList from "../components/products/ProductList"

type Props = {}

const page = (props: Props) => {
  return (
    <div className="bg-gray-200">
      <section className="max-w-7xl mx-auto">
        <AddProductForm />
      </section>
    </div>
  )
}

export default page
