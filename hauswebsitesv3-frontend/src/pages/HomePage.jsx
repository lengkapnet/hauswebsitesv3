import {
  FooterComponent,
  BestSellerCarouselComponent,
  HausMobileAppComponent,
  HausRameComponent,
  NavbarComponent,
} from "../components";
import hausxoatside from "../assets/images/hausxoatside.png";
import nikmoat from "../assets/images/nikmoatbanget.png";
import oatside from "../assets/images/oatside.png";
import hausxberuang from "../assets/images/hausxberuang.png";
import halalhaus from "../assets/images/halalhaus.png";
import artcomponent from "../assets/images/art-component.png";

const HomePage = () => {
  return (
    <div>
      <NavbarComponent />
      {/* image top */}
      <div className="relative flex flex-col items-center bg-[#FFCA00] py-5 md:py-0 md:pb-10 lg:pb-0">
        <div className="md:flex md:w-full md:justify-start md:pl-20">
          <img
            src={hausxoatside}
            alt="Haus X Outside"
            className="relative m-auto w-3/4 md:top-20 md:z-10 md:m-0 md:w-1/2 lg:w-1/3 lg:left-20"
          />
        </div>
        <div className="relative flex flex-col items-center justify-center px-10 md:-top-10 md:z-10 md:flex-row lg:-top-24">
          <img
            src={nikmoat}
            alt="NikmOAT Banget"
            className="relative mt-10 w-5/6 md:left-32 md:z-20 md:w-1/2 lg:bottom-12 lg:left-56 lg:w-2/5"
          />
          <img
            src={oatside}
            alt="Oatside"
            className="relative mr-10 md:z-10 md:w-1/2 lg:right-10 lg:w-full lg:top-10"
          />
        </div>
        <div className="relative flex w-full items-end justify-between px-5 md:absolute md:bottom-1 lg:bottom-10">
          <img
            src={hausxberuang}
            alt="Haus X Beruang"
            className="w-1/2 md:w-1/3 lg:w-1/3"
          />
          <img src={halalhaus} alt="Halal Haus" className="w-1/2 md:w-1/5" />
        </div>
        <img
          src={artcomponent}
          className="hidden md:absolute md:block lg:absolute lg:block"
        />
        <div className="absolute -bottom-4 h-10 w-32 rounded-3xl bg-[#F1BD70] py-2 text-center">
          <p className="font-semibold text-white">BEST SELLER</p>
        </div>
      </div>
      <BestSellerCarouselComponent />
      <HausMobileAppComponent />
      <HausRameComponent />
      <FooterComponent />
    </div>
  );
};

export default HomePage;
