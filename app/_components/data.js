import productImage from "@/app/_assets/pictures/electronic_product_default.jpg";
import streamerImage from "./assets/live_video_pics/streamer.svg";
import image1 from "./assets/live_video_pics/video_1.png";
import image2 from "./assets/live_video_pics/video_2.png";
import image3 from "./assets/live_video_pics/video_3.png";
import image4 from "./assets/live_video_pics/video_4.png";
import image5 from "./assets/live_video_pics/video_5.png";

export const flashSaleProductsData = [
  {
    "product": {
      "image": "https://picsum.photos/id/5/200/200",
      "name": "Cozy Flannel Receiving Blanket for Newborns",
      "price": 24999,
      "cutPrice": 14999,
      "discountPercentage": 40
    },
    "view": {
      "discountPercentageTag": true
    }
  },
  {
    "product": {
      "image": "https://picsum.photos/id/5/200/200",
      "name": "Cozy Flannel Receiving Blanket for Newborns",
      "price": 24999,
      "cutPrice": 14999,
      "discountPercentage": 40
    },
    "view": {
      "discountPercentageTag": true
    }
  },
  {
    "product": {
      "image": "https://picsum.photos/id/5/200/200",
      "name": "Cozy Flannel Receiving Blanket for Newborns",
      "price": 24999,
      "cutPrice": 14999,
      "discountPercentage": 40
    },
    "view": {
      "discountPercentageTag": true
    }
  },
  {
    "product": {
      "image": "https://picsum.photos/id/4/200/200",
      "name": "Organic Cotton Muslin Swaddle Wrap for Babies",
      "price": 18990,
      "cutPrice": 9990,
      "discountPercentage": 47
    },
    "view": {
      "discountPercentageTag": true
    }
  },
  {
    "product": {
      "image": "https://picsum.photos/id/3/200/200",
      "name": "Adorable Animal-Themed Crib Sheets for Babies",
      "price": 15990,
      "cutPrice": 7990,
      "discountPercentage": 50
    },
    "view": {
      "discountPercentageTag": true
    }
  },
  {
    "product": {
      "image": "https://picsum.photos/id/1/200/200",
      "name": "Soft and Cuddly Plush Toys for Infants",
      "price": 9990,
      "cutPrice": 4990,
      "discountPercentage": 50
    },
    "view": {
      "discountPercentageTag": true
    }
  },
  {
    "product": {
      "image": "https://picsum.photos/id/2/200/200",
      "name": "Baby Play Gym with Activity Mat and Toys",
      "price": 34990,
      "cutPrice": 19990,
      "discountPercentage": 43
    },
    "view": {
      "discountPercentageTag": true
    }
  },
  {
    "product": {
      "image": "https://picsum.photos/id/2/200/200",
      "name": "Baby Play Gym with Activity Mat and Toys",
      "price": 34990,
      "cutPrice": 19990,
      "discountPercentage": 44
    },
    "view": {
      "discountPercentageTag": true
    }
  }
]

export const freeDeliveryProductsData = Array.from(Array(10).keys()).fill(
  {
    product: {
      image: productImage,
      name: "Soft Newborn Baby Wrap Blankets Baby Sleeping",
      price: "19,900",
      cutPrice: "3,000",
      discountPercentage: "22",
      rating: {
        average: 4,
        total_rated_user: 172,
      }
    },
    view: {
      freeShippingTitle: true
    },
  },
);

export const normalProductsData = Array.from(Array(10).keys()).fill(
  {
    product: {
      image: productImage,
      name: "Soft Newborn Baby Wrap Blankets Baby Sleeping",
      price: "19,900",
      cutPrice: "3,000",
      discountPercentage: "22",
      rating: {
        average: 4,
        total_rated_user: 172,
      }
    },
    view: {

    },
  },
);

const images = {
  1: image1,
  2: image2,
  3: image3,
  4: image4,
  5: image5,
  6: image1,
  7: image2,
};
export const liveVideosData = Array.from(Array(7).keys()).map((v, i) => ({
  name: "Soft Newborn Baby Wrap Blankets Baby Sleeping",
  image: images[i+1],
  total_viewers: Math.round(Math.random() * 1000 + 1),
  streamer: {
    name: "Alfaz mart Fashion Bd",
    image: streamerImage,
  },
}));