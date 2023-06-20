"use client"
import Image from "next/image"
import React from "react"
import { SocialIcon } from "react-social-icons"
import { Bars3Icon } from "@heroicons/react/24/solid"
import Link from "next/link"
import { useState } from "react"
import { XMarkIcon } from "@heroicons/react/24/solid"
import { motion, AnimatePresence } from "framer-motion"
import PhoneNav from "./PhoneNav"
import {
  MagnifyingGlassIcon,
  ShoppingCartIcon,
  UserIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline"
type Props = {}

const Navbar = (props: Props) => {
  const [isOpen, setIsOpen] = useState(false)
  const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "-100%" },
  }
  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }
  return (
    <>
      <motion.nav className="   bg-yellow-500 p-4">
        {/* phone div */}
        <PhoneNav />
        {/* // desktop nav */}
        <div className="relative hidden lg:grid lg:grid-cols-2   ">
          <div className="flex  items-center  justify-start gap-10 px-4 w-full ">
            <Link href={"/"} className="text-4xl font-black flex-shrink-0">
              JB HI-FI
            </Link>
            <div className="w-fit ">
              <input
                placeholder="Search products,brands and more..."
                className="twInput "
              />
            </div>
          </div>
          <div className=" gap-2 text-black hidden  lg:flex items-center justify-end ">
            <div className="w-full">
              <ul className="flex justify-end text-sm gap-2">
                <li className="flex flex-col items-center">
                  <UserIcon className="h-6 w-6" />
                  Account
                </li>
                <li className="flex flex-col items-center">
                  <Link href={"/cart"}>
                    {" "}
                    <ShoppingCartIcon className="h-6 w-6" />
                    Cart
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </motion.nav>
    </>
  )
}

export default Navbar
