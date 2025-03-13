const Chain = () => {
  const steps = [
    { number: "01", title: "Ariza berish", description: "Siz mahsulot uchun qo‘ng‘iroq qilasiz yoki ariza topshirasiz." },
    { number: "02", title: "Sizga maslahat beramiz", description: "Loyihani va ehtiyojlaringizni byudjet hamda mijoz kutgan natijalarga mos ravishda aniqlash uchun uchrashuv tashkil qilamiz va maslahat beramiz." },
    { number: "03", title: "To‘lov qilish", description: "Siz uchun qulay bo‘lgan har qanday usulda to‘lov amalga oshirasiz." },
    { number: "04", title: "Loyiha tayyorlaymiz", description: "Joyga tashrif, dizayn, muhandislik va rejalashtirish xizmatlari." },
    { number: "05", title: "Yakuniy ishlar", description: "Uskunalarni yetkazib berish, o‘rnatish va sinovdan o‘tkazish." },
    { number: "06", title: "Xizmat", description: "Sotuvdan keyingi xizmat ko‘rsatish." },
  ];
  return (
    <div className="bg-[radial-gradient(95.97%_87.71%_at_94.27%_76.81%,_#2975A9_0%,_#014D81_70.97%)] py-10 px-4 md:px-8 lg:px-16">
      <div className="container mx-auto">
        <div className="flex items-center space-x-4">
          <div className="w-4 h-4 bg-white mt-1"></div>
          <h2 className="text-white text-lg md:text-xl lg:text-2xl">Ishlash mexanizmi</h2>
        </div>
        <div className="my-8 md:my-12">
          <h1 className="text-2xl md:text-3xl lg:text-4xl leading-tight text-white">
            <span className="text-[#FF6418]">Natijaga</span> yo‘naltirilgan <br className="hidden md:block" /> harakatlar zanjiri
          </h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className="backdrop-blur-lg text-white border border-white/20 rounded-2xl p-6 md:p-8 shadow-lg bg-white/10 flex flex-col"
            >
              <h2 className="text-xl md:text-2xl font-bold">{step.number}</h2>
              <div className="relative w-full mt-4">
                <h2 className="border-b-2 border-white pb-6 md:pb-10 text-lg md:text-xl font-semibold">
                  {step.title}
                </h2>
              </div>
              <p className="text-sm md:text-base text-gray-200 mt-6 md:mt-12">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
  
  
};

export default Chain;
