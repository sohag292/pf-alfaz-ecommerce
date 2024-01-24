
import React from "react";
import ProductSlider from "./ProductSlider";
import { normalProductsData } from "@/app/_components/data";

export default function FreeDeliveryProducts() {
  return <ProductSlider productsData={normalProductsData} title="Bike Accessories" />;
}

