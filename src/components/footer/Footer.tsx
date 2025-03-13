import faceb from "../../assets/images/faceb.svg";
import inst from "../../assets/images/inst.svg";
import tg from "../../assets/images/tg.svg";
import yt from "../../assets/images/yt.svg";
import mail from "../../assets/images/mail.svg";

const Footer = () => {

  return (
    <div className="bg-[radial-gradient(95.97%_87.71%_at_94.27%_76.81%,_#2975A9_0%,_#014D81_70.97%)] py-10 px-4">
      <div className="container mx-auto flex flex-wrap justify-between gap-8">
        {/* Left section */}
        <div className="w-full md:w-auto">
          <div className="flex flex-col items-start gap-0 leading-[1.1]">
            <h2 className="text-[28px] font-semibold text-white tracking-wide">Hayleks</h2>
            <h2 className="relative text-[28px] font-semibold text-white">
              Horeca
              <span className="absolute bottom-[-4px] left-0 w-full h-[2px] bg-white"></span>
            </h2>
            <p className="text-[8px] sm:text-[10px] md:text-[12px] text-white tracking-wide uppercase mt-2">
              Equipment & Supplies Solutions
            </p>
          </div>
          <div className="my-6">
            <h2 className="text-white text-lg sm:text-2xl">+9989 (95) 570-70-88</h2>
            <h2 className="text-white text-lg sm:text-2xl">+9989 (95) 570-70-86</h2>
          </div>
          <div className="text-white">
            <p className="my-2">Savdo ofisi</p>
            <p className="text-sm">
              Tashkent, Small Ring Road st, 83 Rua <br /> Antero Quental Nr.
            </p>
          </div>
          <div className="my-6">
            <p className="text-white">Ijtimoiy tarmoqlarimiz</p>
            <div className="flex gap-3 my-4">
              <img src={faceb} alt="facebook" className="w-6 sm:w-8" />
              <img src={inst} alt="instagram" className="w-6 sm:w-8" />
              <img src={tg} alt="telegram" className="w-6 sm:w-8" />
              <img src={yt} alt="youtube" className="w-6 sm:w-8" />
              <img src={mail} alt="mail" className="w-6 sm:w-8" />
            </div>
          </div>
        </div>
  
        {/* Information Section */}
        <div className="text-white w-full sm:w-auto">
          <h2 className="mb-4 sm:mb-6 text-lg sm:text-xl">Informatsiya</h2>
          <p className="mb-2 sm:mb-4">Biz haqimizda</p>
          <p className="mb-2 sm:mb-4">Portfolio</p>
          <p className="mb-2 sm:mb-4">Hamkorlarimiz</p>
          <p className="mb-2 sm:mb-4">Kontakt</p>
        </div>
  
        {/* Catalog Section */}
        <div className="text-white w-full sm:w-auto">
          <h2 className="mb-4 sm:mb-6 text-lg sm:text-xl">Katalog</h2>
          <p className="mb-2 sm:mb-4">F&B</p>
          <p className="mb-2 sm:mb-4">Kir yuvish</p>
          <p className="mb-2 sm:mb-4">Oshxona jihozlari</p>
          <p className="mb-2 sm:mb-4">OS&E</p>
        </div>
  
        {/* Customer Section */}
        <div className="text-white w-full sm:w-auto">
          <h2 className="mb-4 sm:mb-6 text-lg sm:text-xl">Mijozlar uchun</h2>
          <p className="mb-2 sm:mb-4">Mijozga aylaning</p>
        </div>
  
        {/* Button Section */}

      </div>
  
      {/* Footer */}
      <hr className="border-white opacity-30 my-6" />
      <div className="flex flex-wrap justify-between text-white text-sm container mx-auto text-center sm:text-left">
        <p className="border-b sm:border-none w-full sm:w-auto mb-2 sm:mb-0">Maxfiylik siyosati</p>
        <p className="w-full sm:w-auto">info@hayleks.com</p>
        <p className="w-full sm:w-auto">© 2025 Barcha huquqlar himoyalangan</p>
      </div>
    </div>
  );
  
};

export default Footer;
