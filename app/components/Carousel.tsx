"use client"
import React, { useRef, useState } from "react"
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react"

// Import Swiper styles
import "swiper/css"
import "swiper/css/pagination"

// import required modules
import { Navigation, Pagination } from "swiper"
import Image from "next/image"

export default function Carousel() {
  return (
    <>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Navigation, Pagination]}
        className="mySwiper">
        <SwiperSlide>
          <div className="relative h-[400px] w-full  mx-auto">
            <Image
              src={
                "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80"
              }
              alt="team-img"
              fill
              className=""
              style={{ objectFit: "contain" }}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative h-[400px] w-full  mx-auto">
            <Image
              src={
                "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80"
              }
              alt="team-img"
              fill
              className=""
              style={{ objectFit: "contain" }}
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  )
}
