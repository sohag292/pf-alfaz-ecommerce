import Image from "next/image";
import chevronRightIcon from "@/app/_assets/icons/chevron_right.png";
import martIcon from "./assets/mart.svg";
import beautyIcon from "./assets/beauty.svg";
import fashionIcon from "./assets/fashion.svg";
import freeDeliveryIcon from "./assets/free_delivery.svg";
import homeMakeoverIcon from "./assets/home_makeover.svg";

export default function ShopCategories() {
  const buttonIconTextMap = [
    ["Mart", martIcon],
    ["Fashion", fashionIcon],
    ["Beauty & Glamour", beautyIcon],
    ["Home Makeover", homeMakeoverIcon],
    ["Free Delivery", freeDeliveryIcon],
  ]

  return (
    <div className="container xl:w-[76.25rem] grid max-sm:justify-items-center grid-cols-5 gap-2">
      {buttonIconTextMap.map(data => (
        <ShopButton text={data[0]} icon={data[1]} />
      ))}
    </div>
  );
}

function ShopButton({icon, text}) {
  return (
    <button className="lg:bg-white rounded-full p-2 flex items-center justify-between">
      <div className="lg:flex  lg:items-center gap-2">
        <div className="size-12 max-sm:p-3 shrink-1 rounded-full bg-white lg:bg-primary-100  lg:p-1.5">
          <Image src={icon} alt={"shop icon"}/>
        </div>
        <div className=" max-sm:mt-2 text-[8px] lg:text-[14px]  font-semibold text-zinc-900">{text}</div>
      </div>
      <Image src={chevronRightIcon} className="max-sm:hidden " alt={"right icon"}/>
    </button>
  );
}