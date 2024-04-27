import logo from "../../assets/images/logoatas.png";
import playstore from "../../assets/images/googleplay.png";
import appstore from "../../assets/images/appstore.png";
import vektor from "../../assets/images/Vector.png";
import instagram from "../../assets/images/Instagram.png";
import tiktok from "../../assets/images/TikTok.png";
import linkedin from "../../assets/images/LinkedIn.png";

const donwloadAPK = () => {
  window.open(
    "https://play.google.com/store/apps/details?id=com.ibn.haus_mobile_app&hl=en-ID"
  );
};

const donwloadAPKIos = () => {
  window.open("https://apps.apple.com/id/app/haus/id1639044809");
};

const linkLinkedin = () => {
  window.open(
    "https://www.linkedin.com/company/pt-inspirasi-bisnis-nusantara-haus-indonesia/mycompany/"
  );
};

const linkTiktok = () => {
  window.open("https://www.tiktok.com/@haus.indonesia");
};

const linkInstagram = () => {
  window.open("https://www.instagram.com/haus.indonesia/");
};

const FooterComponent = () => {
  return (
    <footer className="bg-gray-bg-footer text-center p-16 w-full h-96">
      <div className="flex justify-around text-left h-full mt-3">
        <div className="">
          <img src={logo} alt="logo" className="mb-3 w-32" />
          <p className="underline decoration-pink-500 decoration-2 mb-3">
            PT. INSPIRASI BISNIS NUSANTARA
          </p>
          <div className="flex items-center gap-2 mb-3">
            <img src={vektor} alt="" />
            <span>halo@haus.co.id</span>
          </div>
          <p className="mt-6">
            <strong>Follow Us</strong>
          </p>
          <div className="flex mt-3">
            <img
              src={instagram}
              alt="Instagram"
              onClick={linkInstagram}
              className="h-10 w-10 mr-4 cursor-pointer"
            />
            <img
              src={tiktok}
              alt="TikTok"
              onClick={linkTiktok}
              className="h-10 w-10 mr-4 cursor-pointer"
            />
            <img
              src={linkedin}
              alt="LinkedIn"
              onClick={linkLinkedin}
              className="h-10 w-10 cursor-pointer"
            />
          </div>
        </div>
        <div className="flex flex-col justify-start items-start gap-6 ">
          <strong className="">BRAND</strong>
          <span>Haus! Indonesia</span>
          <span>Ganjel Roti</span>
          <span>Pedes Cyin</span>
          <span>Hot Oppa</span>
        </div>
        <div className="flex flex-col gap-5">
          <strong className="text-start mb-1">HAUS! APP</strong>
          <strong>Download App</strong>
          <img
            src={playstore}
            alt="Google Play Store"
            onClick={donwloadAPK}
            className="cursor-pointer h-9"
          />
          <img
            src={appstore}
            alt="Apple Store"
            onClick={donwloadAPKIos}
            className="cursor-pointer h-9"
          />
        </div>
        <div className="w-1/3">
          <strong>Lokasi Kami</strong>
          <p className="my-4">
            Gedung Sastra Graha Lantai 2, Jalan Raya Perjuangan No 21, Kebon
            Jeruk, Jakarta Barat 11530
          </p>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d991.6377949722723!2d106.765526!3d-6.1907584!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f71da1536081%3A0xe42ff8ae85877252!2sATM%20BCA%20Sastra%20Graha!5e0!3m2!1sen!2sid!4v1699938751890!5m2!1sen!2sid"
            className="w-full h-37 border-none"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;
