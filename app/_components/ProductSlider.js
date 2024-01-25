"use client";
import React from "react";
import Slider from "react-slick";
import ProductCard from "@/app/_components/product_card";
import expandRightIconSlide from "./assets/expand_right_slide.svg";
import Image from "next/image";

function ProductSlider({ productsData, title }) {
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

  return (
    <div className="container xl:w-[76.25rem]">
      <div className="bg-white px-11 py-3 flex flex-col gap-4">
        <div className="flex justify-between sticky top-0 left-0">
          <div className="text-primary-600 text-xl">{title}</div>
          <button className="text-primary-500 flex">
            See more <Image src={expandRightIconSlide} alt="icon" />
          </button>
        </div>

        <div className=" gap-3">
          <Slider {...sliderSettings}>
            {productsData.map((data, index) => (
              <div key={index}>
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
      style={{
        ...style,
        background: "#fff",
        height: "2.5rem",
        width: "2.5rem",
        zIndex: "30",
      }}
      onClick={onClick}
    >
      <div className="absolute top-0, bottom-0 left-0 right-0 p-2 text-[#9C9C9C]">
        <Image
          src={expandRightIconSlide}
          className={flip && "rotate-180 "}
          alt="Prev icon"
        />
      </div>
    </div>
  );
}

export default ProductSlider;
