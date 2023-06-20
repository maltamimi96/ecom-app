import React from "react"
import ProductCard from "./ProductCard"

type Props = {}

const HomeProducts = (props: Props) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-2 ">
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </div>
  )
}

export default HomeProducts
