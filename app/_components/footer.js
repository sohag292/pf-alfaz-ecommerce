import Image from "next/image";
import footerBand from "./assets/footer_pics/footerBand.svg";
import appleStore from "./assets/footer_pics/appleStore.svg";
import playStore from "./assets/footer_pics/playStore.svg";
import bikas from "./assets/footer_pics/bikas.svg";
import cityTouch from "./assets/footer_pics/cityTouch.svg";
import dbbl from "./assets/footer_pics/dbbl.svg";
import nccBank from "./assets/footer_pics/nccBank.svg";
import roket from "./assets/footer_pics/roket.svg";
import cart from "./assets/responsiveicon/cart.svg";
import category from "./assets/responsiveicon/category.svg";
import message from "./assets/responsiveicon/message.svg";
import navbarhome from "./assets/responsiveicon/navbar-home-active.svg";
import profile from "./assets/responsiveicon/profile.svg";
import vector from "./assets/responsiveicon/Vector.svg";

const companyLinks = [
  { label: "About Alzaf", url: "#" },
  { label: "About Payment", url: "#" },
  { label: "About Blog", url: "#" },
  { label: "About Apps", url: "#" },
];

const customerCareLinks = [
  { label: "Help Center", url: "#" },
  { label: "About Payment", url: "#" },
  { label: "Returns & Refunds", url: "#" },
  { label: "About Apps", url: "#" },
];

const quickLinks = [
  { label: "How to Buy", url: "#" },
  { label: "Returns & Refunds", url: "#" },
  { label: "Terms & Conditions", url: "#" },
];

export default function Footer() {
  const renderLinks = (links) => {
    return (
      <ul className="pt-8">
        {links.map((link, index) => (
          <li key={index}>{link.label}</li>
        ))}
      </ul>
    );
  };

  return (
    <div>
      <footer className="bg-[#0F172A] text-white max-sm:hidden">
        <div className="grid grid-cols-5 gap-1 px-8 py-10 ">
          <div>
            <Image src={footerBand} alt="brandLogo" />
            <ul className="pt-4 text-[#EAEAEA] text-xs leading-6">
              <li>
                Holding No: 4613, Dada Tower(2nd Floor) Madhupur, Tangail,
                Dhaka, Bangladesh
              </li>
              <li>880913815815</li>
              <li>Support@alzaf.com</li>
            </ul>
          </div>
          <div>
            <h3>Company</h3>
            <span className="text-[#EAEAEA] text-xs leading-6 ">
              {renderLinks(companyLinks)}
            </span>
          </div>
          <div>
            <h3>Customer Care</h3>
            <span className="text-[#EAEAEA] text-xs leading-6">
              {renderLinks(customerCareLinks)}
            </span>
          </div>
          <div>
            <h3>Quick Links</h3>
            <span className="text-[#EAEAEA] text-xs leading-6">
              {renderLinks(quickLinks)}
            </span>
          </div>
          <div>
            <h3>Payment Method</h3>
            <div className="grid grid-rows-2 grid-cols-5 gap-4 pt-10">
              <Image className="footer-list" src={cityTouch} alt="cityTouch" />
              <Image className="footer-list" src={nccBank} alt="nccBank" />
              <Image className="footer-list" src={cityTouch} alt="cityTouch" />
              <Image className="footer-list" src={nccBank} alt="nccBank" />
              <Image className="footer-list" src={dbbl} alt="dbbl" />

              <Image className="footer-list" src={cityTouch} alt="cityTouch" />
              <Image className="footer-list" src={nccBank} alt="nccBank" />
              <Image className="footer-list" src={roket} alt="roket" />
              <Image className="footer-list" src={bikas} alt="bikas" />
              <Image className="footer-list" src={roket} alt="roket" />
            </div>
          </div>
        </div>
        <div>
          <div className="flex flex-col items-center pb-8">
            <h3>Download Apps</h3>
            <div className="flex my-6">
              <Image className="mr-5" src={appleStore} alt="app" />
              <Image
                className=""
                src={playStore}
                alt="googleplay"
                width={150}
                height={110}
              />
            </div>
            <p className="text-[#EAEAEA] text-xs">
              {" "}
              &#169; 2023 Alzaf.com All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
      <footer className="lg:hidden max-md:hidden max-sm:block">
        <div className="flex justify-around fixed bottom-0 pt-4 bg-white w-full h-20 z-40">
          <div className="flex flex-col items-center">
            <Image src={category} alt="category" />
            <p className="pt-2 text-[#707070]">Category</p>
          </div>
          <div className="flex flex-col items-center">
            <Image src={message} alt="message" />
            <p className="pt-2 text-[#707070]">Messages</p>
          </div>
          <div className="flex flex-col items-center">
            <Image src={navbarhome} alt="navbarhome" />
            <p className="pt-2 text-[#707070]">Home</p>
          </div>
          <div className="flex flex-col items-center">
            <Image src={vector} alt="vector" />
            <p className="pt-2 text-[#707070]">Live</p>
          </div>
          <div className="flex flex-col items-center">
            <Image src={cart} alt="cart" />
            <p className="pt-2 text-[#707070]">Cart</p>
          </div>
          <div className="flex flex-col items-center">
            <Image src={profile} alt="profile" />
            <p className="pt-2 text-[#707070]">Account</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
