import Carousel from "./components/Carousel"
import HomeProducts from "./components/HomeProducts"
import ProductCard from "./components/ProductCard"
import SpecialOffer from "./components/SpecialOffer"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
      <Carousel />
      <section className="max-w-7xl mx-auto my-2 ">
        <SpecialOffer />
      </section>
      <section className="max-w-7xl mx-auto my-2 ">
        <HomeProducts />
      </section>
    </main>
  )
}
