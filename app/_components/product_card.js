import Image from "next/image";
import freeDeliveryIcon from "./assets/free_delivery.svg";
import starActiveIcon from "@/app/_assets/icons/star_active.svg";
import starInactiveIcon from "@/app/_assets/icons/star_inactive.svg";
import favouriteIcon from '@/app/_components/assets/favourite_white.svg';
import discountTagIcon from '@/app/_components/assets/discount_tag.svg'

export default function ProductCard({data} = {
  data: {
    product: {
      name: undefined,
      image: undefined,
      price: undefined,
      cutPrice: undefined,
      discountPercentage: undefined,
      rating: {
        average: undefined,
        total_rated_user: undefined,
      },
    },
    view: {
      discountPercentageTag: false,
      freeShippingTitle: false,
    },
  },
}) {
  let {product, view} = data;

  if (!view) view = {
    discountPercentageTag: false,
    freeShippingTitle: false,
  };

  return (
    <div className="w-48 bg-white border border-zinc-200 hover:border-primary-400 box-content relative">
      <FavouriteButton />

      <ProductImage product={product} view={view}/>

      {view.freeShippingTitle && <FreeShippingTitle/>}

      <div className="px-2 pt-2 pb-3 text-sm flex flex-col gap-2">
        <div className="text-zinc-900 line-clamp-2">{product.name}</div>

        <Price product={product} view={view}/>
        <Rating rating={product.rating}/>
      </div>

    </div>
  );
}

function FavouriteButton() {
  return (
    <button className="absolute right-3 top-3 size-8 bg-zinc-950/50 rounded-full p-1.5 z-10">
      <Image src={favouriteIcon} alt="favorite icon" className="" />
    </button>
  )
}

function ProductImage({product, view}) {
  return (
    <div className="size-48 mb-1 relative">
      <Image src={product.image} width={4*48} height={4*48} alt="product image"/>

      {view.discountPercentageTag &&
        <div className="h-6 w-[60px] absolute bottom-2 left-2 flex items-center justify-center">
          <Image src={discountTagIcon} alt="discount tag" className="absolute" />
          <div className="z-10 relative text-xs font-bold text-white">{product.discountPercentage}% off</div>
        </div>
      }
    </div>
  );
}

function FreeShippingTitle() {
  return (
    <div className="flex gap-1 items-center px-2">
      <div className="h-4 w-5"><Image src={freeDeliveryIcon} alt="free delivery icon"/></div>
      <div className="italic font-semibold text-zinc-400 text-xs leading-none -mb-0.5">Free Shipping</div>
    </div>
  );
}

function Price({product, view}) {
  return (
    <div className="flex gap-2 items-center">
      <div className="text-primary-500 font-semibold">৳ {product.price}</div>
      {product.cutPrice &&
        <div className="text-zinc-500 text-xs line-through">
          ৳ {product.cutPrice}
        </div>
      }
      {
        product.discountPercentage && !view.discountPercentageTag &&
        <div className="text-zinc-500 text-xs -ml-1"> -{product.discountPercentage}%</div>
      }
    </div>
  );
}

function Rating({rating} = {rating: undefined}) {
  return (
    <div className="flex gap-[1px]">
      {rating && [1, 2, 3, 4, 5].map(num => (
        <div className="size-4">
          <Image
            src={Math.round(rating.average) >= num ? starActiveIcon : starInactiveIcon}
            alt="rating star"
          />
        </div>
      ))}

      {rating && rating.total_rated_user &&
        <div className="text-xs text-zinc-400">({rating.total_rated_user})</div>
      }
    </div>
  );
}