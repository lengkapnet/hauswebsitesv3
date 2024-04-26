import { FooterComponent } from "../components";
import choco_lava_float from "../assets/images/best_seller/choco_lava_float.png";
import drink_beng_beng_caramel from "../assets/images/best_seller/drink_beng_beng_caramel.png";
import choco_cheese_crunchy from "../assets/images/best_seller/choco_cheese_crunchy.png";
import choco_hazlenut_with_boba_brown_sugar from "../assets/images/best_seller/choco_hazlenut_with_boba_brown_sugar.png";
import green_thai_tea_with_egg_pudding from "../assets/images/best_seller/green_thai_tea_with_egg_pudding.png";
import ice_mango_mix_yakult from "../assets/images/best_seller/ice_mango_mix_yakult.png";
import mango_cheese_silky_pudding from "../assets/images/best_seller/mango_cheese_silky_pudding.png";
import thai_tea_with_boba_brown_sugar from "../assets/images/best_seller/thai_tea_with_boba_brown_sugar.png";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
const HomePage = () => {
  const data = [
    {
      name: "Choco Cheese Crunchy",
      image: choco_cheese_crunchy,
    },
    {
      name: "Choco Lava Float",
      image: choco_lava_float,
    },
    {
      name: "Drink Beng Beng Caramel",
      image: drink_beng_beng_caramel,
    },
    {
      name: "Choco Hazlenut with Boba Brown Sugar",
      image: choco_hazlenut_with_boba_brown_sugar,
    },
    {
      name: "Green Thai Tea with Egg Pudding",
      image: green_thai_tea_with_egg_pudding,
    },
    {
      name: "Ice Mango Mix Yakult",
      image: ice_mango_mix_yakult,
    },
    {
      name: "Mango Cheese Silky Pudding",
      image: mango_cheese_silky_pudding,
    },
    {
      name: "Thai Tea with Boba Brown Sugar",
      image: thai_tea_with_boba_brown_sugar,
    },
  ];

  const settingsCarouselMenu = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768, // Tablet dan mobile
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      {/* Carousel Best Seller*/}
      <div className="bg-[#EFDFD1] h-[100svh]">
        {/* Carousel Menu */}
        <div className="carousel-menu">
          <Slider {...settingsCarouselMenu}>
            {data.map((item, index) => (
              <div key={index}>
                <img
                  className="w-auto h-auto px-3 lg:h-1/2 lg:w-1/2"
                  src={item.image}
                  alt={item.name}
                />
              </div>
            ))}
          </Slider>
        </div>
        {/* Carousel Promo 1*/}
        {/* Carousel Promo 2*/}
      </div>
      <FooterComponent />
    </>
  );
};

export default HomePage;
