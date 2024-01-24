"use client";
import Image from "next/image";
import productCategoryDefaultImage from "./assets/product_category_default.png";
import expandRightIconSlide from "./assets/expand_right_slide.svg";
import Slider from "react-slick";

export default function ProductCategories() {
  const sliderSettings = {
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,
    prevArrow: <Arrow flip={true} />,
    nextArrow: <Arrow />,
  };

  return (
    <div className="container xl:w-[76.25rem]">
      <div className="bg-white px-6 py-3 flex flex-col gap-4">
        <div className="flex justify-between sticky top-0 left-0">
          <div className="text-primary-600 text-xl">Categories</div>
        </div>

        <div className="">
        <Slider {...sliderSettings}>
        {Array(20).fill(0).map((_, index) => (
              <div key={index} className=" border-t border-r border-b-4 border-gray-200 flex flex-col items-center p-4 min-w-40">
                <div className="mb-2">
                  <Image src={productCategoryDefaultImage} className="w-24" alt={`category-${index}`} />
                </div>
                <div className="">Smart Watch</div>
                <div className="mb-2">
                  <Image src={productCategoryDefaultImage} className="w-24" alt={`category-${index}`} />
                </div>
                <div>Smart Watch</div>
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