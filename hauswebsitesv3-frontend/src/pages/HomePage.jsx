import { FooterComponent, BestSellerCarouselComponent, NavbarComponent } from "../components";
import hausxoatside from "../assets/images/hausxoatside.png";
import nikmoat from "../assets/images/nikmoatbanget.png";
import oatside from "../assets/images/oatside.png";
import hausxberuang from "../assets/images/hausxberuang.png";
import halalhaus from "../assets/images/halalhaus.png";
import artcomponent from "../assets/images/art-component.png";

const HomePage = () => {
  return (
    <div>
      < NavbarComponent />
      {/* image top */}
      <div className="bg-[#FFCA00] relative flex flex-col items-center py-5 md:py-0 md:pb-10 lg:pb-0" >
        <div className="md:flex md:justify-start md:w-full md:pl-20">
          <img src={hausxoatside} alt="Haus X Outside" className="relative w-3/4 m-auto md:z-10 md:top-20 md:w-1/2 md:m-0" />
        </div>
        <div className="relative flex flex-col items-center justify-center px-10 md:flex-row md:z-10 md:-top-10 lg:-top-24">
          <img src={nikmoat} alt="NikmOAT Banget" className="relative w-5/6 mt-10 md:w-1/2 md:z-20 md:left-32 lg:w-2/5 lg:left-52 lg:bottom-12" />
          <img src={oatside} alt="Oatside" className="relative mr-10 md:w-1/2 md:z-10 lg:w-full lg:right-10" />
        </div>
        <div className="relative flex justify-between items-end w-full px-5 md:absolute md:bottom-1 lg:bottom-10">
          <img src={hausxberuang} alt="Haus X Beruang" className="w-1/2 md:w-1/3 lg:w-1/3" />
          <img src={halalhaus} alt="Halal Haus" className="w-1/2 md:w-1/5" />
        </div>
        <img src={artcomponent} className="hidden md:block md:absolute lg:block lg:absolute" />
        <div className="bg-[#F1BD70] w-32 h-10 absolute -bottom-4 text-center py-2 rounded-3xl">
          <p className="text-white font-semibold">BEST SELLER</p>
        </div>
      </div>
      <BestSellerCarouselComponent />
      <FooterComponent />
    </div >
  );
};

export default HomePage;
