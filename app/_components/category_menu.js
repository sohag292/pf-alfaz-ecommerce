"use client";

import womenGirlFashionIcon from "./assets/womens_&girls_fashion.svg";
import healthIcon from "./assets/health_&_beauty.svg";
import watchIcon from "./assets/watches_bags_jewellery.svg";
import manIcon from "./assets/mens_&_boys_fashion.svg";
import motherBabyIcon from "./assets/mother_&_baby.svg";
import printerIcon from "./assets/electronics_devices.svg";
import tvIcon from "./assets/tv_&_home_appliances.svg";
import usbIcon from "./assets/electronic_accessories.svg";
import groceryIcon from "./assets/groceries.svg";
import homeIcon from "./assets/home_&_ lifestyle.svg";
import basketballIcon from "./assets/sports_&_outdoors.svg";
import carIcon from "./assets/automobile.svg";
import phoneIcon from "./assets/computer_and_laptop.svg";
import clawIcon from "./assets/pet_supplies.svg";
import vectorIcon from "./assets/vector.svg";
import Image from "next/image";
import { useState } from "react";

export default function CategoryMenu() {
  const menuItemsLevel1 = [
    [1, womenGirlFashionIcon, "Womens’ & Girls’ Fashion", vectorIcon],
    [2, healthIcon, "Health & Beauty", vectorIcon],
    [3, watchIcon, "Watches, Bags, Jewellery", vectorIcon],
    [4, manIcon, "Men's & Boys Fashion", vectorIcon],
    [5, motherBabyIcon, "Mother & Baby", vectorIcon],
    [6, printerIcon, "Electronics Devices", vectorIcon],
    [7, tvIcon, "TV & Home Appliances", vectorIcon],
    [8, usbIcon, "Electronic Accessories", vectorIcon],
    [9, groceryIcon, "Groceries", vectorIcon],
    [10, homeIcon, "Home & Lifestyle", vectorIcon],
    [11, basketballIcon, "Sports & Outdoors", vectorIcon],
    [12, carIcon, "Automobile", vectorIcon],
    [13, phoneIcon, "Computer and laptop", vectorIcon],
    [14, clawIcon, "Pet Supplies", vectorIcon],
  ];

  const menuItemsLevel2 = {
    1: [
      "kids bags",
      "laptop bags & cases",
      "Luggage",
      "Travel Bags",
      "Men’s bag",
    ],
    2: [
      "Luggage",
      "kids bags",
      "laptop bags & cases",
      "Travel Bags",
      "Men’s bag",
    ],
    3: [
      "kids bags",
      "laptop bags & cases",
      "Travel Bags",
      "Luggage",
      "Men’s bag",
    ],
    4: [
      "kids bags",
      "laptop bags & cases",
      "Travel Bags",
      "Luggage",
      "Men’s bag",
    ],
    5: [
      "kids bags",
      "Luggage",
      "Travel Bags",
      "laptop bags & cases",
      "Men’s bag",
    ],
    6: [
      "laptop bags & cases",
      "Luggage",
      "kids bags",
      "Travel Bags",
      "Men’s bag",
    ],
    7: [
      "kids bags",
      "Luggage",
      "Travel Bags",
      "laptop bags & cases",
      "Men’s bag",
    ],
    8: [
      "Luggage",
      "kids bags",
      "Travel Bags",
      "Men’s bag",
      "laptop bags & cases",
    ],
    9: [
      "Travel Bags",
      "kids bags",
      "laptop bags & cases",
      "Luggage",
      "Men’s bag",
    ],
    10: [
      "Men’s bag",
      "kids bags",
      "Travel Bags",
      "Luggage",
      "laptop bags & cases",
    ],
  };

  const [menu1HoveredId, setMenu1HoveredId] = useState();

  return (
    <div
      className="relative z-10"
      onMouseLeave={() => setMenu1HoveredId(undefined)}
    >
      {/* Menu Level 1 */}
      <div className="bg-white py-2 flex flex-col w-[13rem]">
        {menuItemsLevel1.map((item) => (
          <button
            className="flex justify-between px-1.5 py-1 gap-2 hover:bg-zinc-100 hover:text-primary-500"
            onMouseOver={() => setMenu1HoveredId(item[0])}
            
            key={item[0]}
          >
            <div className="flex">
              <div className="size-4">
                <Image src={item[1]} alt="icon" />
              </div>
              <div className="text-xs">{item[2]}</div>
            </div>
            <div>
              {menu1HoveredId === item[0] && menuItemsLevel2[item[0]] && (
                <div className="size-4 flex items-center">
                  <Image src={item[3]} alt="arrowIcon" />
                </div>
              )}
            </div>
          </button>
        ))}
      </div>

      {/* Menu Level 2 */}
      {menu1HoveredId && menuItemsLevel2[menu1HoveredId] && (
        <div className="bg-white py-2 flex flex-col w-[13rem] h-[21.8rem] absolute left-[13rem] top-0 bottom-0">
          {menuItemsLevel2[menu1HoveredId].map((item) => (
            <button className="flex px-1.5 py-1 gap-2 hover:bg-zinc-100 hover:text-primary-500">
              <div className="text-xs">{item}</div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
