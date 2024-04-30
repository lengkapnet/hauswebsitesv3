import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  dataBestSeller,
  dataPromoSmall,
  dataPromoBig,
} from "../../constants/bestSellerData";
import Slider from "react-slick";
import React, { useState } from "react";
import right_arrow from "../../assets/images/best_seller/right.png";
import left_arrow from "../../assets/images/best_seller/left.png";
import right_promo from "../../assets/images/best_seller/right_promo.png";
import left_promo from "../../assets/images/best_seller/left_promo.png";

const MenuCarouselComponent = () => {
  const sliderMenuRef = React.createRef(); //slider reference for menu
  const sliderPromoSmallRef = React.createRef(); //slider reference for promo small
  const sliderPromoBigRef = React.createRef(); //slider reference for promo small
  //state for best menu seller
  const [activeIndex, setActiveIndex] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);

  // rigt arrow
  function SampleNextArrow() {
    return (
      <img
        src={right_arrow}
        alt="Next"
        className="absolute right-0 top-1/2 transform -translate-y-1/2 -translate-x-1/4 w-10 h-10 lg:h-14 lg:w-14 cursor-pointer z-10"
        onClick={() => sliderMenuRef.current.slickNext()}
      />
    );
  }

  //left arrow
  function SamplePrevArrow() {
    return (
      <img
        src={left_arrow}
        alt="Previous"
        className=" absolute left-0 top-1/2 transform -translate-y-1/2 translate-x-1/4 w-10 h-10 lg:h-14 lg:w-14 cursor-pointer z-10"
        onClick={() => sliderMenuRef.current.slickPrev()}
      />
    );
  }

  //carousel menu setting
  var settingsCarouselMenu = {
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
        },
      },
      {
        breakpoint: 786,
        settings: {
          slidesToShow: 2,
          centerMode: false,
          slidesToScroll: 1,
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

  //carousel promo small setting
  var settingPromoCarousel = {
    infinite: true,
    speed: 500,
    centerMode: true,
    slidesToShow: 3,
    nextArrow: <SampleNextArrowNull />,
    prevArrow: <SamplePrevArrowNull />,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          centerMode: true,
          infinite: true,
        },
      },
      {
        breakpoint: 786,
        settings: {
          slidesToShow: 2,
          centerMode: false,
          slidesToScroll: 1,
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

  // rigt arrow
  function SampleNextArrowNull() {
    return <img />;
  }

  //left arrow
  function SamplePrevArrowNull() {
    return <img />;
  }

  //carousel promo big setting
  var settingPromoBigCarousel = {
    infinite: true,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    nextArrow: <SampleNextArrowNull />,
    prevArrow: <SamplePrevArrowNull />,
    speed: 500,
    autoplaySpeed: 4000,
    fade: true,
    beforeChange: (newIndex) => setCurrentSlide(newIndex),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 786,
        settings: {
          centerMode: false,
          infinite: true,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          centerMode: false,
          infinite: true,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    // Carousel Best Seller
    <div className="bg-[#EFDFD1] pt-5">
      {/* Carousel Menu -> Aman */}
      <div className="carousel-menu">
        <Slider ref={sliderMenuRef} {...settingsCarouselMenu}>
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
                className="w-auto h-auto lg:w-[90%] lg:h-[90%] px-2 py-5 lg:py-10"
                src={item.image}
                alt={item.name}
              />
            </div>
          ))}
        </Slider>
      </div>

      {/* Line separator */}
      <div className="flex justify-center w-full mt-2">
        <hr className=" hidden w-[90%] lg:my-4 border-t-2 border-gray-400 lg:block " />
      </div>

      {/* Carousel Promo 1*/}
      <div className="carousel-promo-small lg:pt-10">
        <Slider ref={sliderPromoSmallRef} {...settingPromoCarousel}>
          {/* <Slider ref={sliderPromoSmallRef} {...settingsCarouselMenu}> */}
          {dataPromoSmall.map((item, index) => (
            <div key={index}>
              <img className="w-auto  px-3" src={item.image} alt={item.name} />
            </div>
          ))}
        </Slider>
      </div>

      <div className=" flex flex-row justify-end me-10">
        <img
          className="w-[5%] h-[5%] hidden lg:block me-3 cursor-pointer"
          src={left_promo}
          alt="Left Promo"
          onClick={() => sliderPromoSmallRef.current.slickPrev()}
        />
        <img
          className="w-[5%] h-[5%] hidden lg:block cursor-pointer"
          src={right_promo}
          alt="Right Promo"
          onClick={() => sliderPromoSmallRef.current.slickNext()}
        />
      </div>

      {/* Carousel Promo 2*/}
      <div className="carousel-promo-big py-6 lg:py-10 relative">
        <Slider
          className=""
          ref={sliderPromoBigRef}
          {...settingPromoBigCarousel}
          customPaging={(i) => (
            <div className="text-center">
              <div
                className={`h-1 w-2 lg:h-2 lg:w-2 rounded-full mx-auto transition-all duration-500 ease-in-out ${
                  i === currentSlide
                    ? "bg-gray-400 lg:h-2"
                    : "bg-white w-4 h-2 lg:w-7 lg:h-2"
                }`}
              ></div>
            </div>
          )}
          dotsClass="slick-dots absolute bottom-0 lg:bottom-2 flex justify-center"
        >
          {dataPromoBig.map((item, index) => (
            <div key={index}>
              <img
                className="w-[80%] h-auto mx-auto"
                src={item.image}
                alt={item.name}
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default MenuCarouselComponent;
