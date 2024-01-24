// KitchenAndDiningProducts.js
import React from "react";
import ProductSlider from "./ProductSlider"; // Assuming you have the ProductSlider component

import { normalProductsData } from "@/app/_components/data";

export default function KitchenAndDiningProducts() {
  return (
    <ProductSlider productsData={normalProductsData} title="Kitchen And Dining" />
  );
}
