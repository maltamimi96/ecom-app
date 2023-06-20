"use client"
import { Menu } from "@headlessui/react"
interface Props {
  children?: React.ReactNode
  className?: string
  title: string
}

export const DropDown: React.FC<Props> = ({ title, children }) => {
  return (
    <Menu>
      <Menu.Button className={"text-gray-200 px-2 py-1 font-bold text-lg "}>
        {title}
      </Menu.Button>
      <Menu.Items>
        <Menu.Item>
          <div className="relative">
            <div className="absolute inset-0 flex">
              <div className="w-1/2 bg-black">tet</div>
              <div className="w-1/2 bg-gray-800">tete</div>
            </div>
          </div>
        </Menu.Item>
      </Menu.Items>
    </Menu>
  )
}
