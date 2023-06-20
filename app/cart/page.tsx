import React from "react"
import Cart from "../components/cart/Cart"

type Props = {}

const page = (props: Props) => {
  const cartItems = [
    {
      productId: "1",
      name: "Product A",
      price: 19.99,
      quantity: 2,
    },
    {
      productId: "2",
      name: "Product B",
      price: 9.99,
      quantity: 1,
    },
  ]
  return (
    <div>
      <Cart cartItems={cartItems} />
    </div>
  )
}

export default page
