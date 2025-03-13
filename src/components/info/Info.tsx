import { IoLocationOutline } from "react-icons/io5";

const Info = () => {
  return (
    <div className="bg-[#FF6418] text-white">
      <div className="container mx-auto py-2 px-4">
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          
          {/* Location */}
          <div className="flex items-center gap-2 mb-2 md:mb-0">
            <IoLocationOutline size={20} />
            <p className="text-[13px] sm:text-[14px] leading-tight">
              Tashkent, Small Ring Road st, 83 Rua Antero Quental Nr.
            </p>
          </div>

          {/* Contacts */}
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-10 text-[13px] sm:text-[10px]">
            <p>+9989 (95) 570-70-88</p>
            <p>+9989 (95) 570-70-86</p>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Info;
