import React from "react"
import { Menu } from "@headlessui/react"
import { DropDown } from "./DropDown"
import PopOver from "./PopOver"
import Link from "next/link"

type Props = {}

const Categories = (props: Props) => {
  return (
    <div className=" hidden lg:flex gap-8 bg-black px-4 py-2 ">
      <div>
        <PopOver title="Products">
          <ul className="flex flex-col p-2 gap-2 font-semibold my-2">
            <li>
              <Link href={"/"}>Laptops</Link>
            </li>
            <li>
              <Link href={"/"}>Laptops</Link>
            </li>
          </ul>
        </PopOver>
      </div>

      <PopOver title="Brands" />
      <PopOver title="Deals & Catalougues" />
      <PopOver title="Clearance" />
      <PopOver title="Services" />
    </div>
  )
}

export default Categories
