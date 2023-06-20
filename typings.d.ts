interface Product {
  productId: string
  name: string
  description: string
  price: number
  currency: string
  category: string
  brand: string
  availability: boolean
  stock: number
  images: ProductImage[]
  createdAt: string
  updatedAt: string
  reviews: Review[]
}

interface ProductImage {
  imageId: string
  imageUrl: string
  caption: string
}

interface Review {
  reviewId: string
  author: string
  rating: number
  comment: string
  createdAt: string
}

interface Customer {
  customerId: string
  firstName: string
  lastName: string
  email: string
  address: Address
  createdAt: string
  updatedAt: string
}

interface Address {
  street: string
  city: string
  state: string
  postalCode: string
  country: string
}
