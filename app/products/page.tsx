import React from "react"
import ProductDetails from "../components/products/ProductDetails"

type Props = {}
const exampleProduct: Product = {
  productId: "123456789",
  name: "Example Product",
  description: "This is an example product.",
  price: 19.99,
  currency: "USD",
  category: "Electronics",
  brand: "Example Brand",
  availability: true,
  stock: 10,
  images: [
    {
      imageId: "image1",
      imageUrl:
        "https://images.unsplash.com/photo-1687075379294-0a3189299656?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80",
      caption: "Product Image 1",
    },
    {
      imageId: "image2",
      imageUrl:
        "https://images.unsplash.com/photo-1685544830644-f2966cdb4aad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      caption: "Product Image 2",
    },
  ],
  createdAt: "2023-06-18T12:00:00Z",
  updatedAt: "2023-06-18T12:30:00Z",
  reviews: [
    {
      reviewId: "review1",
      author: "John Doe",
      rating: 4,
      comment: "Great product!",
      createdAt: "2023-06-18T13:00:00Z",
    },
    {
      reviewId: "review2",
      author: "Jane Smith",
      rating: 5,
      comment: "Highly recommended.",
      createdAt: "2023-06-18T14:00:00Z",
    },
  ],
}

const page = (props: Props) => {
  return (
    <main className="max-w-7xl m-auto">
      <ProductDetails product={exampleProduct} />
    </main>
  )
}

export default page
