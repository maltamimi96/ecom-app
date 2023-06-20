import Image from "next/image"
import React from "react"

type Props = {}

const SpecialOffer = (props: Props) => {
  return (
    <div className="w-full h-fit ">
      <div className="relative h-[300px]  w-[80rem]">
        <Image
          src={
            "https://images.ctfassets.net/xa93kvziwaye/Z91nc65Nfh2flBx72pVs4/0084a88e4a1747eb45b25310a3de0c65/jb-au-202306-perks-join-now-update_homepage-tile.jpg?w=360&h=200&fm=jpg"
          }
          alt="team-img"
          fill
          className=""
          style={{ objectFit: "cover" }}
        />
      </div>
    </div>
  )
}

export default SpecialOffer
