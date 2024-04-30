import playstore from "../../assets/images/googleplay2.png";
import appstore from "../../assets/images/appstore2.png";
import mobileMockup from "../../assets/images/mobile_mockup.png";

const donwloadAPK = () => {
  window.open(
    "https://play.google.com/store/apps/details?id=com.ibn.haus_mobile_app&hl=en-ID",
  );
};

const donwloadAPKIos = () => {
  window.open("https://apps.apple.com/id/app/haus/id1639044809");
};

const HausMobileAppComponent = () => {
  return (
    <>
      <div className="md:[105vh] relative h-[812px] w-full justify-center bg-[#EFDFD1] py-14 text-[#612072] md:h-full">
        <div className="relative my-auto h-full">
          <div className="absolute ml-6 mt-2 hidden h-full md:block lg:ml-8 xl:-mt-10 xl:ml-12">
            <div className="flex h-full items-center ">
              <img
                src={mobileMockup}
                className="my-auto w-[280px] lg:w-[360px] xl:w-[400px]"
              ></img>
            </div>
          </div>
          <div className="my-auto flex h-full w-full justify-center rounded-[42px] bg-[#F3B964] px-4 py-6 md:h-[50vh] md:justify-end md:px-0 md:py-6 lg:py-2 xl:h-[80vh]">
            <div className="ml-4 md:my-auto md:w-3/5">
              <h1 className="mt-2 text-center text-3xl font-extrabold md:text-start md:text-5xl">
                Haus Mobile App For Order
              </h1>
              <p className="mt-6 text-2xl font-medium md:text-3xl">
                Dapatkan Voucher Menarik dan Ekstra Promo!
              </p>
              <div className="mt-3 gap-y-2 text-xl font-medium md:text-2xl">
                <li>
                  Lebih Mudah Pesan dengan Aplikasi haus! , kamu bisa pilih
                  pesanan Delivery, Pickup, atau Dine In untuk Skip antrian
                </li>
                <li>Pesan Menu Favorit kamu dari toko terdekat</li>
              </div>

              <p className="my-2 text-center text-[#404040] md:hidden">
                Download aplikasi di
              </p>
              <div className="flex justify-center gap-x-4 md:mt-8 md:flex md:justify-start md:gap-x-6 lg:mt-12 lg:gap-x-10">
                <img
                  src={playstore}
                  alt="Google Play Store"
                  onClick={donwloadAPK}
                  className="h-[40px] cursor-pointer md:h-full"
                />
                <img
                  src={appstore}
                  alt="Apple Store"
                  onClick={donwloadAPKIos}
                  className="h-[40px] cursor-pointer md:h-full"
                />
              </div>
              <div className="absolute mt-5 flex w-[90%] md:hidden">
                <img src={mobileMockup} width={200} className="mx-auto"></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HausMobileAppComponent;
