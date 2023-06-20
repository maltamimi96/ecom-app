import Image from "next/image"
import React from "react"

interface ProductDetailProps {
  product: Product
}

const ProductDetails: React.FC<ProductDetailProps> = ({ product }) => {
  return (
    <div className="p-4">
      <div className="grid grid-col-1  md:grid-cols-2">
        <div className="">
          <h3 className="text-xl font-bold mt-6 mb-2">Images</h3>
          <div className="grid grid-cols-2 gap-4">
            {product.images.map((image) => (
              <div key={image.imageId}>
                <Image
                  width={500}
                  height={500}
                  src={image.imageUrl}
                  alt={image.caption}
                  className="w-full"
                />
                <p className="text-gray-700">{image.caption}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="order-first md:order-last">
          <h2 className="text-2xl font-bold mb-4">{product.name}</h2>
          <div className="">
            <p className="text-gray-700 mb-4">{product.description}</p>
            <div className="bg-red-500 w-fit p-4 rounded text-white font-bold">
              <p className="">
                Price: {product.price} {product.currency}
              </p>
            </div>

            <p className="text-gray-700">Category: {product.category}</p>
            <p className="text-gray-700">Brand: {product.brand}</p>
            <p className="text-gray-700">
              Availability:{" "}
              {product.availability ? "Available" : "Out of stock"}
            </p>
            <p className="text-gray-700">Stock: {product.stock}</p>
          </div>
        </div>
      </div>

      <h3 className="text-xl font-bold mt-6 mb-2">Reviews</h3>
      {product.reviews.map((review) => (
        <div key={review.reviewId} className="border rounded p-4 mt-4">
          <p className="text-gray-700">Author: {review.author}</p>
          <p className="text-gray-700">Rating: {review.rating}</p>
          <p className="text-gray-700">Comment: {review.comment}</p>
          <p className="text-gray-700">Created At: {review.createdAt}</p>
        </div>
      ))}
    </div>
  )
}

export default ProductDetails
