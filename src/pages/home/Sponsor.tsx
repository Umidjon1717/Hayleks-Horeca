import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { FreeMode, Autoplay } from "swiper/modules";
import sponsor1 from "../../assets/images/sponsor1.png";
import sponsor2 from "../../assets/images/sponsor2.png";

const sentences = [
  <>
    <span className="text-[#a29d9da3]">Hamkorlarimiz</span> hamkorlarimiz bilan{" "}
    <br />
    birgalikda <span className="text-[#e0e0e0a3]">o'smoqdamiz</span>
  </>,
  <>
    <span className="text-[#a29d9da3]">Biz hamkorlarimiz</span> bilan <br />
    <span className="">muvaffaqiyat sari</span> yo'l olmoqdamiz
  </>,
  <>
    <span className="text-[#a29d9da3]">Ishonchli hamkorlarimiz</span> bilan{" "}
    <br />
    <span className="">yuksalish sari</span> qadam{" "}
    <span className="text-[#E0E0E0]">tashlamoqdamiz</span>
  </>,
  <>
    Birgalikda <span className="text-[#a29d9da3]">rivojlanish va o'sish</span>{" "}
    bizning <br />
    <span>asosiy maqsadimiz</span>
  </>,
  <>
    <span>Innovatsiyalar</span> orqali <br />
    <span className="text-[#a29d9da3]">hamkorlarimiz</span> bilan{" "}
    <span>oldinga yurmoqdamiz</span>
  </>,
];
const Sponsor = () => {
  const images = [sponsor1, sponsor1];
  const images2 = [sponsor2, sponsor2];
  const [index, setIndex] = useState(0);

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % sentences.length);
  };

  const handlePrev = () => {
    setIndex((prev) => (prev - 1 + sentences.length) % sentences.length);
  };
  return (
    <div className="my-10 px-4 md:px-0">
      <div className="container mx-auto">
        <div className="flex items-center space-x-2 md:space-x-4">
          <div className="w-3 h-3 md:w-4 md:h-4 bg-black mt-1"></div>
          <h2 className="text-lg md:text-2xl">Hamkorlarimiz</h2>
        </div>
  
        <div className="flex flex-col md:flex-row items-center justify-between my-8 md:my-12">
          <h2 className="text-xl md:text-3xl text-center md:text-left">
            <span className="text-black">{sentences[index]}</span>
          </h2>
  
          <div className="flex space-x-2 md:space-x-4 mt-4 md:mt-0">
            <div
              className="border rounded-lg p-2 md:p-3 cursor-pointer"
              onClick={handlePrev}
            >
              <GrFormPrevious className="text-black text-xl md:text-3xl" />
            </div>
            <div
              className="border rounded-lg p-2 md:p-3 cursor-pointer"
              onClick={handleNext}
            >
              <GrFormNext className="text-black text-xl md:text-3xl" />
            </div>
          </div>
        </div>
      </div>
  
      {/* First Swiper */}
      <div className="w-full overflow-hidden py-4">
        <Swiper
          modules={[FreeMode, Autoplay]}
          spaceBetween={0}
          grabCursor={true}
          freeMode={true}
          speed={12000}
          loop={true}
          slidesPerView="auto"
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            reverseDirection: true,
          }}
          breakpoints={{
            0: { spaceBetween: 5 },
            480: { spaceBetween: 5 },
            767: { spaceBetween: 10 },
            992: { spaceBetween: 15 },
          }}
          className="trusted-by-swiper"
        >
          {images.map((image, index) => (
            <SwiperSlide
              key={index}
              className="flex justify-center items-center"
            >
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className="w-auto h-[120px] sm:h-[150px] md:h-[180px] lg:h-[200px] object-contain"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
  
      {/* Second Swiper */}
      <div className="w-full overflow-hidden py-4">
        <Swiper
          modules={[FreeMode, Autoplay]}
          spaceBetween={0}
          grabCursor={true}
          freeMode={true}
          speed={12000}
          loop={true}
          slidesPerView="auto"
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            reverseDirection: false,
          }}
          breakpoints={{
            0: { spaceBetween: 5 },
            480: { spaceBetween: 5 },
            767: { spaceBetween: 10 },
            992: { spaceBetween: 15 },
          }}
          className="trusted-by-swiper"
        >
          {images2.map((image, index) => (
            <SwiperSlide
              key={index}
              className="flex justify-center items-center"
            >
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className="w-auto h-[120px] sm:h-[150px] md:h-[180px] lg:h-[200px] object-contain"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
  
  
};

export default Sponsor;
