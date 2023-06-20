import { HeartIcon } from "@heroicons/react/24/outline"
import Image from "next/image"
import React from "react"

type Props = {}

const ProductCard = (props: Props) => {
  return (
    <div className="border p-1 drop-shadow-xl">
      <div className="flex justify-between mb-2">
        <div className="">
          <p className="bg-red-600 border border-black font-black text-white italic p-1">
            ON SALE
          </p>
        </div>
        <div className="">
          <p>
            <HeartIcon className="w-8 h-8 text-gray-800" />
          </p>
        </div>
      </div>
      <div className="relative w-[600px] h-72 md:w-72 md:h-72">
        <Image
          src={
            "https://images.unsplash.com/photo-1597740985671-2a8a3b80502e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
          }
          alt="team-img"
          fill
          className=""
          style={{ objectFit: "cover" }}
        />
      </div>
      <div>
        <p className="text-gray-800 font-bold text-lg">Product Title</p>
      </div>
      <div>reviews</div>
      <div className="px-4 py-2">
        <div className="border-2 text-center  bg-yellow-400 text-red-500 font-black border-black text-2xl  ">
          <h2 className="p-2">$299</h2>
          <div className="bg-red-500 ">
            {" "}
            <h2 className="p-2 text-white ">$299 OFF</h2>
          </div>
        </div>
      </div>

      <div>
        <button className="bg-sky-800 text-white font-bold p-2 w-full my-2">
          Add to Cart
        </button>
      </div>
    </div>
  )
}

export default ProductCard
