// import { useState } from "react";
import logo from "../../assets/images/logo/logoatas.png";
import { NavLink } from "react-router-dom";

const donwloadAPK = () => {
  window.open(
    "https://play.google.com/store/apps/details?id=com.ibn.haus_mobile_app&hl=en-ID",
  );
};

const NavbarComponent = () => {
  // const [isDropdownOpen, setDropdownOpen] = useState(false);

  // const toggleDropdown = () => {
  //     setDropdownOpen(!isDropdownOpen);
  // };

  return (
    <>
      <nav className="sticky top-0 z-30 flex h-[10vh] items-center justify-between bg-white px-4 py-2 shadow-md lg:px-8">
        <div className="ml-4 pb-2 md:ml-3 lg:ml-10">
          <NavLink to="/">
            <img src={logo} alt="Logo" className="w-36  cursor-pointer" />
          </NavLink>
        </div>
        <div className="text hidden items-center md:ml-0 md:flex lg:ml-auto xl:ml-auto">
          <p className="px-1.5 lg:px-3" to="/about">
            TENTANG KAMI
          </p>

          <p className="px-1.5 lg:px-3" to="/menu">
            MENU
          </p>

          <p className="px-1.5 lg:px-3" to="/lokasi">
            LOKASI TOKO
          </p>

          <p className="px-1.5 lg:px-3" to="/bigorder">
            HAUS PARTY
          </p>

          <p className="px-1.5 lg:px-3" to="/karir">
            KARIR
          </p>

          <button
            onClick={donwloadAPK}
            className="hidden rounded-md bg-[#8A489C] px-6 py-2 text-sm text-white hover:bg-[#6e3e7e] md:flex lg:ml-8 xl:ml-12 "
          >
            <strong>Download Apps</strong>
          </button>
        </div>
        {/* <div>
                    <button
                        className={` text-3xl p-2 text-purple-main md:hidden ${isDropdownOpen ? "active" : ""
                            }`}
                        onClick={toggleDropdown}
                    >
                        <a href="#brand">
                            <strong>☰</strong>
                        </a>
                    </button>
                </div> */}
      </nav>
      {/* {isDropdownOpen && (
                <div className="fixed py-3 z-50 flex flex-col w-full items-end space-y-2 bg-white bg-opacity-90 font-semibold text-purple-main">
                    <NavLink className="px-7 lg:px-3" to="/about">
                        TENTANG KAMI
                    </NavLink>

                    <NavLink className="px-7 lg:px-3" to="/menu">
                        MENU
                    </NavLink>

                    <NavLink className="px-7 lg:px-3" to="/lokasi">
                        LOKASI TOKO
                    </NavLink>

                    <NavLink className="px-7 lg:px-3" to="/bigorder">
                        BIG ORDER
                    </NavLink>
                    <NavLink className="px-7 lg:px-3" to="/karir">
                        KARIR
                    </NavLink>
                    <button
                        onClick={donwloadAPK}
                        className="mr-7 px-3 py-2 lg:px-3 bg-purple-main hover:bg-[#6e3e7e] rounded-md text-white "
                    >
                        <strong>Download Apps</strong>
                    </button>
                </div>
            )} */}
    </>
  );
};

export default NavbarComponent;
