"use client";

import ProductCard from "@/app/_components/product_card";
import {
  flashSaleProductsData,
  freeDeliveryProductsData,
  normalProductsData,
} from "@/app/_components/data";
import expandRightIcon from "./assets/expand_right.svg";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function JustForYou() {
  const products = [...normalProductsData, ...normalProductsData];
  const [numberOfItemsToShow, setNumberOfItemsToShow] = useState(12);
  const [visibleProductsData, setVisibleProductsData] = useState([]);

  useEffect(() => {
    setVisibleProductsData(() => products.slice(0, numberOfItemsToShow));
  }, [numberOfItemsToShow, products]);

  const isLoadMoreVisible = visibleProductsData.length < products.length;

  return (
    <div className="container xl:w-[76.25rem]">
      <div className="bg-white px-0 py-3 flex flex-col gap-4">
        <div className="text-center">
          <div className="text-primary-600 text-xl">Just For You</div>
        </div>
        <div className="flex gap-3 flex-wrap">
          {visibleProductsData.map((data, index) => (
            <ProductCard key={index} data={data} />
          ))}
        </div>
        {isLoadMoreVisible && (
          <div className="flex justify-center items-center mt-4">
            <div>
              <button
                className="bg-white border border-primary-400 py-2 px-40 text-primary-400 rounded-md"
                onClick={() => setNumberOfItemsToShow((prev) => prev + 12)}
              >
                Load More
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
