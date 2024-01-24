"use client"
import { useState } from 'react';
import Slider from "react-slick";
import slide1Img from "./assets/slideshow_pics/slide_1.jpg";
import slide2Img from "./assets/slideshow_pics/slide_2.jpg";
import slide3Img from "./assets/slideshow_pics/slide_3.jpg";
import slide4Img from "./assets/slideshow_pics/slide_4.jpg";
import slide5Img from "./assets/slideshow_pics/slide_5.jpg";
import Image from "next/image";

export default function Slideshow() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slideImages = [
    [1, slide1Img],
    [2, slide2Img],
    [3, slide3Img],
    [4, slide4Img],
    [5, slide5Img],
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    customPaging: function (i) {
      return (
        <div
          className={`w-3 h-3  -mt-12 ${
            currentSlide === i ? 'bg-primary-500' : 'bg-gray-300'
          } rounded-full`}
        />
      );
    },
    beforeChange: (current, next) => setCurrentSlide(next),
  };

  return (
    <div className="min-w-0 mb-12 pr-4">
      <Slider {...settings}>
        {slideImages.map((img) => (
          <div className="h-full w-full" key={img[0]}>
            <Image className="" src={img[1]} alt="images" />
          </div>
        ))}
      </Slider>
    </div>
  );
}
