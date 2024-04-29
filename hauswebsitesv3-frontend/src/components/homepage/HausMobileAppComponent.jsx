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
      <div className="pb h-[105vh] w-full bg-[#EFDFD1] pt-10 text-[#612072]">
        <div className="absolute -mt-20 ml-8 w-[35%]">
          <img src={mobileMockup}></img>
        </div>
        <div className="flex h-[80vh] justify-end rounded-[42px] bg-[#F3B964]">
          <div className="my-auto w-3/5">
            <h1 className="mt-2 text-5xl font-extrabold">
              Haus Mobile App For Order
            </h1>
            <p className="mt-6 text-3xl font-medium">
              Dapatkan Voucher Menarik dan Ekstra Promo!
            </p>
            <div className="mt-3 gap-y-2 text-2xl font-medium">
              <li>
                Lebih Mudah Pesan dengan Aplikasi haus! , kamu bisa pilih
                pesanan Delivery, Pickup, atau Dine In untuk Skip antrian
              </li>
              <li>Pesan Menu Favorit kamu dari toko terdekat</li>
            </div>
            <div className="mt-12 flex gap-x-10">
              <img
                src={playstore}
                alt="Google Play Store"
                onClick={donwloadAPK}
                className="cursor-pointer"
              />
              <img
                src={appstore}
                alt="Apple Store"
                onClick={donwloadAPKIos}
                className=" cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HausMobileAppComponent;
