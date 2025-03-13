import faceb from "../../assets/images/faceb.svg";
import inst from "../../assets/images/inst.svg";
import tg from "../../assets/images/tg.svg";
import yt from "../../assets/images/yt.svg";
import mail from "../../assets/images/mail.svg";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate=useNavigate();
  const handleNavigate=()=>{
    navigate('/contact');
    window.scrollTo(0,0);
  }
  return (
    <div className="bg-[radial-gradient(95.97%_87.71%_at_94.27%_76.81%,_#2975A9_0%,_#014D81_70.97%)] py-10">
      <div className="container mx-auto flex justify-between">
        <div>
          <div className="flex flex-col items-start gap-0 leading-[1.1]">
            <h2 className="text-[28px] font-semibold text-white tracking-wide">
              Hayleks
            </h2>
            <h2 className="relative text-[28px] font-semibold text-white">
              Horeca
              <span className="absolute bottom-[-4px] left-0 w-full h-[2px] bg-white"></span>
            </h2>
            <p className="text-[5px] text-white tracking-wide uppercase mt-2">
              Equipment & Supplies Solutions
            </p>
          </div>
          <div className="my-10">
            <h2 className="text-white text-[32px]">+9989 (95) 570-70-88</h2>
            <h2 className="text-white text-[32px]">+9989 (95) 570-70-86</h2>
          </div>
          <div className="text-white">
            <p className="my-4">Savdo ofisi</p>
            <p>
              Tashkent, Small Ring Road st, 83 Rua <br /> Antero Quental Nr.
            </p>
          </div>
          <div className="my-10">
            <p className="text-white">Ijtimoiy tarmoqlarimiz</p>
            <div className="flex gap-4 my-4">
              <img src={faceb} alt="facebook" />
              <img src={inst} alt="instagram" />
              <img src={tg} alt="telegram" />
              <img src={yt} alt="youtube" />
              <img src={mail} alt="mail" />
            </div>
          </div>
        </div>
        <div className="text-white">
          <h2 className="mb-10">Informatsiya</h2>
          <p className="mb-4">Biz haqimizda</p>
          <p className="mb-4">Portfolio</p>
          <p className="mb-4">Hamkorlarimiz</p>
          <p className="mb-4">Kontakt</p>
        </div>
        <div className="text-white">
          <h2 className="mb-10">Katalog</h2>
          <p className="mb-4">F&B</p>
          <p className="mb-4">Kir yuvish</p>
          <p className="mb-4">Oshxona jihozlari</p>
          <p className="mb-4">OS&E</p>
        </div>
        <div className="text-white">
          <h2 className="mb-10">Mijozlar uchun</h2>
          <p className="mb-4">Mijozga aylaning</p>
        </div>
        <div>
          <button onClick={()=>handleNavigate()} className="bg-[#FF6418] text-white px-10 py-4 rounded-full">Bizga yozing</button>
        </div>
      </div>
      <hr />
      <div className="flex justify-between text-white mt-10 container mx-auto">
        <p className="border-b">Maxfiylik siyosati</p>
        <p>info@hayleks.com</p>
        <p>© 2025 Barcha huquqlar himoyalangan</p>
      </div>
    </div>
  );
};

export default Footer;
