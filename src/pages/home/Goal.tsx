import goal1 from "../../assets/images/goal1.png";
import goal2 from "../../assets/images/goal2.png";

const Goal = () => {
  return (
    <div className="container mx-auto py-16 px-6 lg:px-12">
      <div className="grid lg:grid-cols-2 gap-14 items-center">

        <div className="bg-[#DFD6C9] rounded-2xl mt-[420px] shadow-xl px-6 py-6 flex items-center gap-10">
          <div className="border-r border-black  pr-10 flex flex-col justify-between h-full">
            <h2 className="text-[32px] font-semibold text-gray-900 mb-4">
              Ko‘zlangan maqsad
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              <span className="text-black font-medium">Sifatli uskunalar</span>, 
              sifatli xizmat, <br /> qoniqarli hamkorlar
            </p>
          </div>
          <div className="max-w-[220px]">
            <img src={goal1} alt="Goal" className="w-full object-cover rounded-lg shadow-md" />
          </div>
        </div>

        <div className="space-y-10">

          <div>
            <h2 className=" text-[18px] font-medium text-gray-700 uppercase tracking-wider">
              Maqsadimiz
            </h2>
            <h2 className="text-[42px] leading-tight font-semibold text-gray-900 mt-4">
              Keng qamrovli{" "}
              <span className="text-[#E0E0E0]">yechimlarni taqdim etish</span>{" "}
              va mijozlarning{" "}
              <span className="text-[#E0E0E0]">eng yaxshi qiymatga ega bo‘lishi</span>
            </h2>
            <p className="text-lg text-gray-600 mt-4 leading-relaxed">
              Mehmondo‘stlik sanoatida 20 yillik tajribaga ega kompaniyamiz 
              restoran, mehmonxona va kafelar uchun maxsus dizayn, yuqori 
              sifatli uskunalar tanlash, o‘rnatish va ularga xizmat ko‘rsatish 
              bo‘yicha yechimlarni taqdim etadi. Biz ish joylarini qulay, 
              biznesingizni esa samarali qilishga yordam beramiz. 
              Xizmatlarimiz o‘rnatishdan keyin ham davom etadi – 
              xodimlaringizni uskunalardan maksimal darajada samarali 
              foydalanishga o‘rgatamiz.
            </p>
          </div>

          {/* Our Mission Section */}
          <div className="bg-[#F5F5F7] rounded-2xl shadow-xl px-12 py-10 flex items-center gap-10">
            <div className="border-r border-black pr-10 flex flex-col justify-between h-full">
              <h2 className="text-[30px] font-semibold text-gray-900 mb-4">
                Bizning vazifamiz
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Professional yechimlar uchun hamkor bo'lish.
              </p>
            </div>
            <div className="max-w-[220px]">
              <img src={goal2} alt="Mission" className="w-full object-cover rounded-lg shadow-md" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Goal;
