import "./footer.css";
import logo from "../../assets/images/logoatas.png";
import playstore from "../../assets/images/googleplay.png";
import vektor from "../../assets/images/Vector.png";
import instagram from "../../assets/images/Instagram.png";
import tiktok from "../../assets/images/TikTok.png";
import linkedin from "../../assets/images/LinkedIn.png";

const donwloadAPK = () => {
  window.open(
    "https://play.google.com/store/apps/details?id=com.ibn.haus_mobile_app&hl=en-ID"
  );
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
    <footer>
      <div className="footer-content">
        <div className="logofooter">
          <img src={logo} alt="logo" />
          <p className="pt">PT. INSPIRASI BISNIS NUSANTARA</p>
          <div className="email-footer">
            <p>
              <img src={vektor} alt="" /> halo@haus.co.id
            </p>
          </div>
          <p>
            <strong>Follow Us</strong>
          </p>
          <div className="follow">
            <img
              src={instagram}
              alt="instagram"
              onClick={linkInstagram}
              className="footerinstagram"
            />
            <img
              src={tiktok}
              alt="tiktok"
              onClick={linkTiktok}
              className="footertiktok"
            />
            <img
              src={linkedin}
              alt="linkedin"
              onClick={linkLinkedin}
              className="footerlinkedin"
            />
          </div>
        </div>
        <div className="mid-footer">
          <div className="brand">
            <p>
              <strong>Brand</strong>
            </p>
            <p>Haus! Indonesia</p>
            <p>Ganjel Roti</p>
            <p>Pedes Cyin</p>
            <p>Hot Oppa</p>
          </div>
          <div className="app">
            <p>
              <strong>HAUS! APP</strong>
            </p>
            <p>
              <strong>Download App</strong>
            </p>
            <br />
            <img src={playstore} alt="playstore" onClick={donwloadAPK} />
            <br />
          </div>
        </div>
        <div className="lokasi mb-14 lg:mb-0">
          <p>
            <strong>Lokasi Kami</strong>
          </p>
          <p>
            Gedung Sastra Graha Lantai 2, Jalan Raya Perjuangan No 21, Kebon
            Jeruk, Jakarta Barat 11530
          </p>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d991.6377949722723!2d106.765526!3d-6.1907584!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f71da1536081%3A0xe42ff8ae85877252!2sATM%20BCA%20Sastra%20Graha!5e0!3m2!1sen!2sid!4v1699938751890!5m2!1sen!2sid"
            width="400"
            height="150"
            style={{ border: 0 }}
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
