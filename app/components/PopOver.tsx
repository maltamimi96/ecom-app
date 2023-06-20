"use client"
import React from "react"
import { Popover } from "@headlessui/react"
import { ChevronDownIcon } from "@heroicons/react/20/solid"

type Props = {
  title: string
  children?: React.ReactNode
}

const PopOver = (props: Props) => {
  return (
    <Popover>
      <Popover.Button
        className={
          "text-gray-200 font-semibold text-lg hover:bg-yellow-500 hover:text-black p-1"
        }>
        {props.title}
      </Popover.Button>
      <Popover.Panel className={"absolute z-10 "}>
        <div className="flex flex-col min-w-[200px] min-h-fit bg-white w-full">
          {props.children}
        </div>
      </Popover.Panel>
    </Popover>
  )
}

export default PopOver
