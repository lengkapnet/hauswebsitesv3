import {
  FooterComponent,
  HausMobileAppComponent,
  HausRameComponent,
} from "../components";
import { BestSellerCarouselComponent } from "../components";

const HomePage = () => {
  return (
    <>
      <BestSellerCarouselComponent />
      <HausMobileAppComponent />
      <HausRameComponent />
      <FooterComponent />
    </>
  );
};

export default HomePage;
