import { Link, useNavigate } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";
import { links } from "../../static";
import { TbGridDots } from "react-icons/tb";

const Header = () => {
  const navigate = useNavigate();
  return (
    <header className=" text-black p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div onClick={()=>navigate('/')} className="flex cursor-pointer flex-col items-start gap-0 leading-[1.1]">
          <h2 className="text-[28px] font-extrabold text-[#014F82] tracking-wide">
            Hayleks
          </h2>
          <h2 className="relative text-[28px] font-extrabold text-[#014F82]">
            Horeca
            <span className="absolute bottom-[-4px] left-0 w-full h-[4px] bg-[#014F82]"></span>
          </h2>
          <p className="text-[5px] text-[#014F82] tracking-wide uppercase mt-2">
            Equipment & Supplies Solutions
          </p>
        </div>

        <nav>
          <ul className="flex space-x-12">
            {links.map((link, index) => (
              <li key={index}>
                <Link to={link.href} className="hover:text-[#014F82] transition">
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center space-x-4">
          <IoCartOutline className=" text-2xl cursor-pointer hover:text-[#014F82]" />
          <div className="flex text-white px-7 rounded-3xl py-2 gap-3 bg-[#014D81]">
            <TbGridDots className="mt-1" />
            <button> Katalog</button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
