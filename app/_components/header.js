import Image from "next/image";
import brandLogo from "@/app/_assets/brand_logo.png";
import searchIcon from "@/app/_assets/icons/search.svg";
import accountIcon from "@/app/_assets/icons/account.svg";
import favouriteIcon from "@/app/_assets/icons/favourite.svg";
import cartIcon from "@/app/_assets/icons/cart.svg";
import cloudServiceCardSvg from "@/app/_assets/cloud_service_card.svg";

export default function Header() {
  return (<div className="bg-white">
    <div className="container xl:w-[76.25rem] flex gap-8 py-2 items-center">
      <Logo/>
      <SearchBar/>
      <Menu/>
      <CloudServiceCard/>
    </div>
  </div>);
}

function Logo() {
  return <Image src={brandLogo} alt="Brand Logo" className="w-32"/>;
}

function SearchBar() {
  return (<div className="flex-grow flex bg-zinc-200/80 rounded-xl">
    <input className="bg-transparent px-4 text-sm h-11 rounded-xl flex-grow placeholder:text-zinc-500" type="text"
           placeholder="Search Product"/>
    <button className="size-11 bg-primary-500 rounded-xl p-3">
      <Image src={searchIcon} alt="search icon"/>
    </button>
  </div>);
}

function Menu() {
  const buttonIcons = [accountIcon, favouriteIcon, cartIcon];

  function IconButton({children}) {
    return (<button className="size-11 bg-zinc-100 rounded-xl p-3">
      <Image src={children} alt="search icon"/>
    </button>);
  }

  return (<div className="flex gap-3">
    {buttonIcons.map(icon => (<IconButton>{icon}</IconButton>))}
  </div>);
}

function CloudServiceCard() {
  return (<Image src={cloudServiceCardSvg} alt="cloud service card"/>);
}