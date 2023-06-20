"use client"

import React from "react"
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid"
import { useState } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import {
  MagnifyingGlassIcon,
  ShoppingCartIcon,
  UserIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline"

type Props = {}

const PhoneNav = (props: Props) => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }
  const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "-100%" },
  }

  return (
    <div className=" ">
      {/* phone div */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate={isOpen ? "open" : "closed"}
            exit="closed"
            transition={{ duration: 0.2 }}
            variants={variants}
            className="h-screen w-screen px-4 lg:hidden  bg-[#0e0d0d] flex justify-start items-start  relative">
            <XMarkIcon
              onClick={toggleMenu}
              className="absolute top-4 right-4 h-12 w-12 text-gray-200  cursor-pointer"
            />
            <ul className="py-20 px-2 menu-items text-gray-200 text-4xl space-y-8  w-full flex flex-col items-start tracking-widest font-bold  ">
              <Link href={"/"}>Home</Link>
              <Link href={"about"}>About</Link>
              <Link href={"services"}>Services</Link>
              <Link href={"contact"}>Contact</Link>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
      <div className="grid grid-cols-3 lg:hidden items-center p-2">
        <div className="">
          <Bars3Icon
            onClick={toggleMenu}
            className=" cursor-pointer  h-8 w-8  text-gray-800 "
          />
        </div>
        <div className="mx-auto">
          <Link href={"/"} className="text-4xl font-black ">
            JB HI-FI
          </Link>
        </div>

        <div className="w-full">
          <ul className="flex justify-end text-sm gap-2">
            <li className="flex flex-col items-center">
              <UserIcon className="h-6 w-6" />
              Account
            </li>
            <li className="flex flex-col items-center">
              <ShoppingCartIcon className="h-6 w-6" />
              Cart
            </li>
          </ul>
        </div>
      </div>
      <div className=" lg:hidden p-2">
        <div className=" flex items-center bg-white  ">
          <MagnifyingGlassIcon className="text-gray-500 h-6 w-6 pl-1 bg-white " />
          <input
            placeholder="Search products,brands and more..."
            className="twInput  "
          />
        </div>
      </div>
      <div className=" lg:hidden p-2 flex items-center justify-center">
        <MapPinIcon className="h-4 w-4 " /> set my location
      </div>
    </div>
  )
}

export default PhoneNav
