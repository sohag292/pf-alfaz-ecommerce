import React from "react";
import ProductSlider from "./ProductSlider";
import { normalProductsData } from "@/app/_components/data";

export default function ComputerAccessoriesProducts() {
  return (
    <ProductSlider
      productsData={normalProductsData}
      title="Computer Accessories"
    />
  );
}