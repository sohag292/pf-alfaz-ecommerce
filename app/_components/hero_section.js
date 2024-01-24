import CategoryMenu from "@/app/_components/category_menu";
import Slideshow from "@/app/_components/slideshow";

export default function HeroSection() {
  return (
    <div className="container xl:w-[76.25rem] flex gap-12">
      <CategoryMenu />

      <Slideshow />
    </div>
  );
}