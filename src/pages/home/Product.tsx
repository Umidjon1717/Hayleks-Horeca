import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useGetProductsQuery } from "../../redux/productApi";
import { IProduct } from "../../types/types";
import { BsCart3 } from "react-icons/bs";

const ProductList: React.FC = () => {
  const { data, error, isLoading } = useGetProductsQuery({ limit: 8, skip: 0 });
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

  if (isLoading)
    return (
      <div className="flex justify-center my-8">
        <div className="loader"></div>
      </div>
    );
  if (error) return <p>Error fetching products!</p>;

  return (
    <div className="container mx-auto my-8">
        <div className="flex justify-between">
            <h2 className="text-[40px] ml-10">Sifatli mahsulotlar <br /> kolleksiyasi</h2>
            <button className="text-[#F27F62] mr-11">[ Barchasini ko‘rish ]</button>
        </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
        {data?.products.map((product: IProduct) => (
          <div
            key={product.id}
            className=" p-4 transition-shadow flex flex-col"
          >
            <Link to={`/products/${product.id}`}>
              <img
                src={product.thumbnail}
                alt={product.title}
                className="w-full h-40 object-cover border rounded-md"
              />
            </Link>
            <div className="bg-[#F5F5F7] py-6 px-6 mt-3 rounded-lg">
              <div className="flex flex-col mt-3 text-sm">
                <h2 className="text-lg font-semibold">{product.title}</h2>
                <div className="flex justify-between text-gray-500 mt-4">
                  <span>Brand:</span>
                  <span className="font-medium">{product.brand}</span>
                </div>
                <div className="flex justify-between text-gray-500">
                  <span>Category:</span>
                  <span className="font-medium">{product.category}</span>
                </div>
              </div>

              <div className="mt-8 flex gap-10 justify-between items-center ">
                <button className="bg-[#FF6418] text-white px-12 py-3 rounded-full font-semibold">
                  Sotib olish
                </button>

                <button
                  onClick={() => handleCart(product.id)}
                  className="bg-white p-[10px] rounded-full"
                >
                  <BsCart3
                  size={20}
                    className={
                      cart.includes(product.id)
                        ? "text-green-500"
                        : "text-gray-800"
                    }
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
