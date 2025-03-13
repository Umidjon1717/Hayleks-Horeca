import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";
import { TbGridDots } from "react-icons/tb";
import { links } from "../../static";
import { NavLink } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

const Header = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="text-black p-4 shadow-md sticky top-0 left-0 w-full z-50 bg-white">
      <div className="container mx-auto flex justify-between items-center">

        <div
          onClick={() => navigate("/")}
          className="flex cursor-pointer flex-col items-start gap-0 leading-[1.1]"
        >
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

        <nav className="hidden lg:flex">
          <ul className="flex space-x-8 font-semibold">
            {links.map((link, index) => (
              <li key={index}>
                <NavLink
                  to={link.href}
                  className={({ isActive }) =>
                    `hover:text-[#014F82] transition-all duration-300 ${
                      isActive
                        ? "border-b-2 border-[#014F82] text-[#014F82]"
                        : ""
                    }`
                  }
                >
                  {link.title}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center space-x-4">
          <IoCartOutline className="text-2xl cursor-pointer hover:text-[#014F82]" />
          <div className="flex text-white px-7 rounded-3xl py-2 gap-3 bg-[#014D81]">
            <TbGridDots className="mt-1" />
            <button>Katalog</button>
          </div>
          <button
            className="lg:hidden text-3xl transition-all duration-300"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      <div
        className={`fixed top-0 left-0 h-full w-2/3 bg-white shadow-lg transform transition-all duration-300 ease-in-out
  ${
    menuOpen
      ? "translate-x-0 opacity-100"
      : "-translate-x-full opacity-0 pointer-events-none"
  } md:hidden`}
      >
        <div className="flex justify-end p-4">
          <button className="text-3xl" onClick={() => setMenuOpen(false)}>
            <FiX />
          </button>
        </div>
        <nav className="flex flex-col items-center space-y-6 mt-10">
          {links.map((link, index) => (
            <NavLink
              key={index}
              to={link.href}
              className={({ isActive }) =>
                `text-lg font-semibold hover:text-[#014F82] transition-all duration-300 ${
                  isActive ? "border-b-2 border-[#014F82] text-[#014F82]" : ""
                }`
              }
              onClick={() => setMenuOpen(false)}
            >
              {link.title}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
