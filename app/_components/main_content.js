import ShopCategories from "@/app/_components/shop_categories";
import FlashSaleProducts from "@/app/_components/flash_sale_products";
import FreeDeliveryProducts from "@/app/_components/free_delivery_products";
import ComputerAccessoriesProducts from "@/app/_components/computer_accessories_products";
import KitchenAndDiningProducts from "@/app/_components/kitchen_and_dining_products";
import BikeAccessoriesProducts from "@/app/_components/bike_accessories_products";
import HeroSection from "@/app/_components/hero_section";
import JustForYou from "@/app/_components/just_for_you";
import Footer from "@/app/_components/footer"
import LiveVideosCollection from "./live_videos.collection";
import ProductCategories from "./Product_categories";

export default function MainContent() {
  return (
    <div className="bg-zinc-100 py-3 flex flex-col gap-3">
      {/* problem */}
       <HeroSection/>
      

      <ShopCategories/>

      <FlashSaleProducts/>
      
      <ProductCategories/> 

      <FreeDeliveryProducts/>
      
     
      <ComputerAccessoriesProducts/>

  
      <KitchenAndDiningProducts/>

 
      <BikeAccessoriesProducts/>

      <LiveVideosCollection/>

      <JustForYou/>
      
      <Footer/>
    </div>
  );
}