import { IoLocationOutline } from "react-icons/io5";

const Info = () => {
  return (
    <div className="bg-[#FF6418]">
        <div className="container mx-auto py-3">
            <div className="flex justify-between">
                <div className="flex items-center gap-2">
                    <IoLocationOutline size={20}/>
                    <p className="text-[14px]">Tashkent, Small Ring Road st, 83 Rua Antero Quental Nr.</p>
                </div>
                <div className="flex items-center gap-10 text-[14px]">
                    <p>+9989 (95) 570-70-88</p>
                    <p>+9989 (95) 570-70-86</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Info