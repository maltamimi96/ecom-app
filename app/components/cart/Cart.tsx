import React from "react"
type Props = {
  cartItems: any
}
const Cart = ({ cartItems }: Props) => {
  return (
    <div className="max-w-md mx-auto">
      <h2 className="text-xl font-semibold mb-4">Shopping Cart</h2>
      {cartItems.length > 0 ? (
        <ul className="space-y-2">
          {cartItems?.map((item) => (
            <li
              key={item.productId}
              className="flex justify-between items-center">
              <div>
                <h3 className="text-lg font-semibold">{item.name}</h3>
                <p className="text-gray-700">${item.price.toFixed(2)}</p>
                <p className="text-gray-700">Quantity: {item.quantity}</p>
              </div>
              <button className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">
                Remove
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-700">Your cart is empty.</p>
      )}
      <div className="mt-4 flex justify-end">
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Checkout
        </button>
      </div>
    </div>
  )
}

export default Cart
