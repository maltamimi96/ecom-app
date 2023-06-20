import { HeartIcon } from "@heroicons/react/24/outline"
import Image from "next/image"
import Link from "next/link"
import React from "react"

type Props = {
  product: Product
}

const ProductCard = ({ product }: Props) => {
  return (
    <div className="drop-shadow-2xl ">
      <div className="relative w-[600px] h-72 md:w-72 md:h-72">
        <Link href={`/products/${product?.productId}`}>
          <Image
            src={
              "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
            }
            alt="team-img"
            fill
            className="hover:scale-110 transform transition-all duration-500 ease-in-out"
            style={{ objectFit: "cover" }}
          />
        </Link>
      </div>
      <div className="space-y-2 my-2">
        <p className="text-gray-800 font-semibold text-md">Product Title</p>
        <p className="">$299</p>
      </div>

      <div>
        <button className=" text-left  p-2 w-full my-2 uppercase">
          Add to Cart
        </button>
      </div>
    </div>
  )
}

export default ProductCard
