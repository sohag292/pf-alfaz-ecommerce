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
    <div className="container xl:w-[76.25rem] grid grid-cols-5 gap-3">
      {buttonIconTextMap.map(data => (
        <ShopButton text={data[0]} icon={data[1]} />
      ))}
    </div>
  );
}

function ShopButton({icon, text}) {
  return (
    <button className="bg-white rounded-full p-2 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <div className="size-9 rounded-full bg-primary-100 p-1.5">
          <Image src={icon} alt={"right icon"}/>
        </div>
        <div className="text-base font-semibold text-zinc-900">{text}</div>
      </div>
      <Image src={chevronRightIcon} alt={"right icon"}/>
    </button>
  );
}