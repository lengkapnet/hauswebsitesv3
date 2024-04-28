import hausRame from "../../assets/images/hausRame.png";

const HausRameComponent = () => {
  return (
    <>
      <div className="bg-[#E03E9F] p-6 text-white md:grid md:grid-cols-2 md:p-10 lg:p-16">
        {/* IMAGE if Desktop < */}
        <div className="hidden md:block">
          <img src={hausRame} className="md:h-80 lg:h-96"></img>
        </div>
        {/* header only if mobile */}
        <div className="flex justify-center md:hidden">
          <div>
            <div className="h-1 w-20 rounded-md bg-[#8A489C]"></div>
            <p className="mt-2 text-lg">Haus Party</p>
          </div>
        </div>

        {/* Text and Promo Button */}
        <div className="mt-8  md:ml-7">
          <p className="text-center text-2xl font-bold md:text-start md:text-4xl md:font-extrabold lg:text-5xl ">
            Ciptakan Momen Bahagiamu <br className="hidden md:block"></br>
            Bersama Haus!
          </p>
          <p className="mt-4 text-center font-normal md:text-start md:font-medium lg:text-2xl">
            Semua menu haus! dalam satu paket
          </p>
          {/* IMAGE if Mobile*/}
          <div className="md:hidden">
            <img src={hausRame} className="md:h-80 lg:h-96"></img>
          </div>
          <div className="flex justify-center md:justify-start">
            <button className="mt-8 rounded-3xl border-2 bg-[#F19E25] px-6 py-2 pt-1 text-2xl font-bold">
              Baca Selengkapnya
            </button>
          </div>
        </div>
      </div>
      <div className="h-96 bg-black"></div>
    </>
  );
};

export default HausRameComponent;
