"use client";
import LiveVideoCard from "@/app/_components/live_video_card";
import Image from "next/image";
import expandRightIcon from "@/app/_components/assets/expand_right.svg";
import {liveVideosData} from "@/app/_components/data";
import expandRightIconSlide from "./assets/expand_right_slide.svg";
import Slider from "react-slick";

export default function LiveVideosCollection() {
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
    <div className="container mx-auto px-4 xl:w-full">
      <div className="bg-white px-6 py-3 flex flex-col gap-4 ">
        <div className="flex  md:flex-row  justify-between items-center">
          <div className="text-primary-600 text-xl md:text-2xl lg:text-3xl">Alzaf Live</div>
          <button className="text-primary-500 flex">See more <Image src={expandRightIcon} alt="icon"/></button>
        </div>

        <div className=" gap-3">
          <Slider {...sliderSettings}>
          {liveVideosData.map(data => (
            <div>
              <LiveVideoCard data={data}/>
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