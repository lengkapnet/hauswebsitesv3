import { FooterComponent } from "../components";
import { dataBestSeller } from "../constants/bestSellerData";
import right_arrow from "../assets/images/best_seller/right.png";
import left_arrow from "../assets/images/best_seller/left.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
import React, { useState } from "react";
const HomePage = () => {
  const sliderRef = React.createRef();
  const [activeIndex, setActiveIndex] = useState(0);

  function SampleNextArrow() {
    return (
      <img
        src={right_arrow}
        alt="Next"
        className="absolute right-0 top-1/2 transform -translate-y-1/2 -translate-x-1/4 w-8 h-8 lg:h-14 lg:w-14 cursor-pointer"
        onClick={() => sliderRef.current.slickNext()}
      />
    );
  }

  function SamplePrevArrow() {
    return (
      <img
        src={left_arrow}
        alt="Previous"
        className=" absolute top-1/2 transform -translate-y-1/2 translate-x-1/4 w-8 h-8 md:h-10 md:w-10 lg:h-14 lg:w-14 cursor-pointer z-10"
        onClick={() => sliderRef.current.slickPrev()}
      />
    );
  }

  var settingsCarouselMenu = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    centerMode: true,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    beforeChange: (oldIndex, newIndex) => setActiveIndex(newIndex),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          centerMode: true,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 786,
        settings: {
          slidesToShow: 2,
          centerMode: false,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          centerMode: false,
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      {/* Carousel Best Seller*/}
      <div className="bg-[#EFDFD1] h-[100svh] ">
        {/* Carousel Menu */}
        <div className="carousel-menu py-10  ">
          <Slider ref={sliderRef} {...settingsCarouselMenu}>
            {dataBestSeller.map((item, index) => (
              <div
                key={index}
                className={
                  index === activeIndex
                    ? "lg:scale-110 transition-transform lg:z-20"
                    : "transition-transform"
                }
              >
                <img
                  className="w-auto h-auto md:w-[70%] lg:w-[90%] lg:h-[90%] px-2 py-10    "
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
