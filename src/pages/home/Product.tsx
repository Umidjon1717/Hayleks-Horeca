import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useGetProductsQuery } from "../../redux/productApi";
import { IProduct } from "../../types/types";
import { BsCart3 } from "react-icons/bs";

const ProductList: React.FC = () => {
  const { data, error, isLoading } = useGetProductsQuery({ limit: 8, skip: 0 });
  const [cart, setCart] = useState<number[]>([]);
  const navigate=useNavigate();
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

  if (isLoading)
    return (
      <div className="flex justify-center my-8">
        <div className="loader"></div>
      </div>
    );
  if (error) return <p>Error fetching products!</p>;

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 my-8">
      <div className="flex flex-col sm:flex-row justify-between items-center sm:items-start mb-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-center sm:text-left leading-tight">
          Sifatli mahsulotlar <br className="hidden sm:block" /> kolleksiyasi
        </h2>
        <button
          onClick={() => navigate("/product")}
          className="text-[#F27F62] hover:text-[#f26262] text-base sm:text-lg mt-4 sm:mt-0"
        >
          [ Barchasini ko‘rish ]
        </button>
      </div>
      

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {data?.products.map((product:IProduct) => (
          <div
            key={product.id}
            className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col transition-transform transform hover:scale-105"
          >
            <Link to={`/products/${product.id}`} className="block">
              <img
                src={product.thumbnail}
                alt={product.title}
                className="w-full h-48 object-cover"
              />
            </Link>
            
            <div className="bg-[#F5F5F7] py-4 px-5 flex flex-col flex-grow">
              <h2 className="text-lg font-semibold mb-2">{product.title}</h2>
              <div className="text-gray-600 text-sm">
                <p><span className="font-medium">Brand:</span> {product.brand}</p>
                <p><span className="font-medium">Category:</span> {product.category}</p>
              </div>
              
              {/* Buttons */}
              <div className="mt-auto flex justify-between items-center pt-4">
                <button className="bg-[#FF6418] text-white px-6 py-2 rounded-full font-semibold text-sm sm:text-base">
                  Sotib olish
                </button>
                <button
                  onClick={() => handleCart(product.id)}
                  className="bg-white p-2 rounded-full shadow-md hover:shadow-lg transition"
                >
                  <BsCart3
                    size={20}
                    className={cart.includes(product.id) ? "text-green-500" : "text-gray-800"}
                  />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
