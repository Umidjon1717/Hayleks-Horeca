import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import hero1 from "../../assets/images/hero1.png";
import hero2 from "../../assets/images/hero2.png";
import hero3 from "../../assets/images/hero3.png";
import hero4 from "../../assets/images/hero4.png";
import "./HeroSlider.css";
import { BsCart3 } from "react-icons/bs";
const images = [hero1, hero2, hero3, hero4];
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useGetProductsQuery } from "../../redux/productApi";
import { IProduct } from "../../types/types";

const Hero: React.FC = () => {
  const { data } = useGetProductsQuery({ limit: 10, skip: 0 }); 
  const [cart, setCart] = useState<number[]>([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCart(storedCart);
  }, []);

  const handleCart = (productId: number) => {
    let updatedCart;

    if (cart.includes(productId)) {
      updatedCart = cart.filter((id) => id !== productId);
    } else {
      updatedCart = [...cart, productId];
    }

    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  interface ProductData {
    products: IProduct[];
  }

  const highestDiscountProduct: IProduct | null = (data as ProductData)?.products?.reduce(
    (maxProduct, product) =>
      product.discountPercentage > (maxProduct?.discountPercentage || 0)
        ? product
        : maxProduct,
    null as IProduct | null
  );

  return (
    <div className="container mx-auto flex flex-col lg:flex-row justify-between gap-6 my-10 px-4">
      

      <div className="w-full lg:w-2/3">
        <Swiper
          modules={[Navigation, Pagination, Autoplay, EffectFade]}
          navigation={{ enabled: true }}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          effect="fade"
          loop
          className="w-full max-w-[900px] h-[300px] md:h-[350px] lg:h-[400px]"
        >
          {images.map((img, index) => (
            <SwiperSlide key={index}>
              <img
                src={img}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover rounded-lg"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="w-full lg:w-1/3 bg-gray-100 rounded-2xl px-6 py-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl sm:text-2xl font-semibold">Kun chegirmasi</h2>
          <div className="text-orange-500 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold">
              {highestDiscountProduct ? `${Math.floor(highestDiscountProduct.discountPercentage)}%` : "0%"}
            </h2>
            <p className="text-sm sm:text-base">Chegirma</p>
          </div>
        </div>

        {highestDiscountProduct && (
          <div className="p-4  rounded-lg flex flex-col sm:flex-row items-center gap-6">
            <Link to={`/products/${highestDiscountProduct.id}`} className="w-full sm:w-1/3">
              <img
                src={highestDiscountProduct.thumbnail}
                alt={highestDiscountProduct.title}
                className="w-full h-32 object-cover rounded-md"
              />
            </Link>

            <div className="w-full sm:w-2/3">
              <h3 className="text-lg font-medium mb-2">{highestDiscountProduct.title}</h3>
              <p className="text-gray-500 text-sm">
                <span className="font-semibold">Brand:</span> {highestDiscountProduct.brand}
              </p>
              <p className="text-gray-500 text-sm">
                <span className="font-semibold">Category:</span> {highestDiscountProduct.category}
              </p>

              <div className="mt-4 flex flex-col gap-2">
                <button
                  onClick={() => handleCart(highestDiscountProduct.id)}
                  className={`flex items-center justify-center gap-2 py-2 border rounded-full transition ${
                    cart.includes(highestDiscountProduct.id) 
                      ? "border-green-500 text-green-500" 
                      : "border-gray-800 text-gray-800"
                  }`}
                >
                  <BsCart3 size={20} /> Savatga
                </button>
                <button className="bg-orange-500 text-white px-4 py-2 rounded-full font-medium">
                  Sotib olish
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      
    </div>
  );
};

export default Hero;

