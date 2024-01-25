"use client";
import React, { useState, useEffect } from "react";
import ProductCard from "@/app/_components/product_card";
import { flashSaleProductsData } from "@/app/_components/data";
import expandRightIconSlide from "./assets/expand_right_slide.svg";
import expandRightIcon from "./assets/expand_right.svg";
import Image from "next/image";
import Slider from "react-slick";

export default function FlashSaleProducts() {
  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());

  const sliderSettings = {
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,
    prevArrow: <Arrow flip={true} />,
    nextArrow: <Arrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  function calculateTimeRemaining() {
    const endTime = new Date("2024-12-31T23:59:59").getTime();
    const currentTime = new Date().getTime();
    const timeDifference = endTime - currentTime;

    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
    const minutes = Math.floor(
      (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
    );
    const hours = Math.floor(
      (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );

    return { hours, minutes, seconds };
  }

  return (
    <div className="container xl:w-[76.25rem]">
      <div className="bg-white px-8 py-3 flex flex-col gap-4">
        <div className="flex justify-between sticky top-0 left-0">
          <div className="flex justify-items-center items-center gap-36 max-sm:gap-0 ">
            <div className="text-primary-600 text-xl max-sm:text-base mr-5 font-medium">
              Flash Sale
            </div>
            <div className=" flex items-center justify-items-center text-[#707070] font-normal">
              <div className="mr-5 max-sm:hidden"> Ending in </div>
              <div className="btn-box">{timeRemaining.hours}</div> :
              <div className="btn-box"> {timeRemaining.minutes} </div> :
              <div className="btn-box"> {timeRemaining.seconds}</div>
            </div>
          </div>

          <button className="text-primary-500 flex">
            See more <Image src={expandRightIcon} alt="icon" />
          </button>
        </div>

        <div className="w-full">
          <Slider {...sliderSettings}>
            {flashSaleProductsData.map((data) => (
              <div>
                <ProductCard data={data} />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}

function Arrow({ flip = false, ...props }) {
  const { className, style, onClick } = props;

  return (
    <div
      className={className + " relative rounded-full shadow-lg"}
      style={{ ...style, background: '#fff', height: '2.5rem', width: '2.5rem', zIndex: '30' }}
      onClick={onClick}
    >
      <div className="absolute top-0, bottom-0 left-0 right-0 p-2 text-[#9C9C9C]">
        <Image src={expandRightIconSlide} className={flip && "rotate-180 "} alt="Prev icon" />
      </div>
    </div>
  );
}

