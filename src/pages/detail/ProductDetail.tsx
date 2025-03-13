import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useGetSingleProductQuery } from "../../redux/productApi";
import { useGetCategoryProductsQuery } from "../../redux/productApi";
import { BsCart3 } from "react-icons/bs";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { data: product } = useGetSingleProductQuery(Number(id));

  const [quantity, setQuantity] = useState(1);
  const [cart, setCart] = useState<any[]>([]);
  const [selectedImage, setSelectedImage] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCart(storedCart);
  }, []);

  const handleAddToCart = () => {
    if (!product) return;

    const newCartItem = {
      id: product.id,
      title: product.title,
      price: product.price,
      thumbnail: product.thumbnail,
      quantity,
    };

    const updatedCart = [...cart, newCartItem];
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const handleQuantityChange = (amount: number) => {
    setQuantity((prev) => Math.max(1, prev + amount));
  };

  const category = product?.category ?? "";
  const { data: relatedProducts, isLoading: isRelatedLoading } =
    useGetCategoryProductsQuery(category, {
      skip: !category,
    });

  const visibleProducts =
    relatedProducts?.products?.slice(currentIndex, currentIndex + 4) || [];

  const handleNext = () => {
    if (relatedProducts?.products?.length) {
      setCurrentIndex((prev) =>
        prev + 4 < relatedProducts.products.length ? prev + 4 : 0
      );
    }
  };

  const handlePrev = () => {
    if (relatedProducts?.products?.length) {
      setCurrentIndex((prev) =>
        prev - 4 >= 0 ? prev - 4 : relatedProducts.products.length - 4
      );
    }
  };

  useEffect(() => {
    console.log("Related Products:", relatedProducts);
  }, [relatedProducts]);

  const handleCart = (id: number) => {
    const productInCart = cart.find((item) => item.id === id);
    if (productInCart) {
      const updatedCart = cart.filter((item) => item.id !== id);
      setCart(updatedCart);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
    } else {
      const relatedProduct = relatedProducts?.products.find(
        (item) => item.id === id
      );
      if (relatedProduct) {
        const newCartItem = {
          id: relatedProduct.id,
          title: relatedProduct.title,
          price: relatedProduct.price,
          thumbnail: relatedProduct.thumbnail,
          quantity: 1,
        };
        const updatedCart = [...cart, newCartItem];
        setCart(updatedCart);
        localStorage.setItem("cart", JSON.stringify(updatedCart));
      }
    }
  };
  return (
    <div className="my-8">
      <div className="p-6 container mx-auto flex flex-col lg:flex-row gap-10">
        {product && (
          <>
            {/* Image Section */}
            <div className="flex flex-col lg:flex-row gap-4 w-full lg:w-2/3">
              <div className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-hidden">
                {product.images.map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt={`Thumbnail ${index}`}
                    className={`w-16 h-16 object-cover cursor-pointer border-2 rounded-md transition ${
                      selectedImage === img
                        ? "border-red-500"
                        : "border-gray-300"
                    } hover:opacity-75`}
                    onClick={() => setSelectedImage(img)}
                  />
                ))}
              </div>

              <div className="w-full">
                <img
                  src={selectedImage || product.thumbnail}
                  alt={product.title}
                  className="w-full h-[300px] md:h-[400px] lg:h-[500px] object-cover rounded-md shadow-md"
                />
              </div>
            </div>

            {/* Product Info */}
            <div className="w-full lg:w-1/3 space-y-4">
              <h2 className="text-2xl font-bold text-center lg:text-left">
                {product.title}
              </h2>
              <div className="grid grid-cols-2 gap-4 text-lg">
                <p className="font-medium">Price:</p>
                <p className="text-gray-800">${product.price}</p>
                <p className="font-medium">Stock:</p>
                <p className="text-gray-800">{product.stock}</p>
                <p className="font-medium">Category:</p>
                <p className="text-gray-800">{product.category}</p>
                <p className="font-medium">Brand:</p>
                <p className="text-gray-800">{product.brand}</p>
              </div>
              <button className="text-[#F27F62] block text-center">
                [ Mahsulot haqida savol bering ]
              </button>
            </div>

            {/* Cart Section */}
            <div className="w-full lg:w-1/3 space-y-4 border p-4 rounded-xl">
              <div className="flex justify-center items-center space-x-4 p-2">
                <button
                  onClick={() => handleQuantityChange(-1)}
                  className="px-4 py-2 border rounded hover:bg-[#F27F62] hover:text-white transition"
                  aria-label="Decrease quantity"
                >
                  -
                </button>
                <span className="text-lg font-semibold">{quantity}</span>
                <button
                  onClick={() => handleQuantityChange(1)}
                  className="px-4 py-2 border rounded hover:bg-[#F27F62] hover:text-white transition"
                  aria-label="Increase quantity"
                >
                  +
                </button>
              </div>

              <button
                onClick={handleAddToCart}
                className="w-full flex items-center justify-center gap-2 bg-[#F27F62] text-white px-6 py-3 rounded-full text-lg transition hover:bg-[#cc6248]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 3h2l3.6 7.59M7 13h10l4-8H5.4M7 13l-2.2 4M7 13l3 6h8l3-6M5 21h14"
                  />
                </svg>
                Savatga
              </button>

              <button
                onClick={handleAddToCart}
                className="w-full border xl:text-[12px] text-black hover:bg-gray-100 px-6 py-3 rounded-full  transition"
              >
                Bir bosishda xarid qilish
              </button>
            </div>
          </>
        )}
      </div>
      <div className="p-6 container mx-auto">
        <h2 className="text-2xl font-bold">Mahsulot haqida</h2>
        <p className="text-lg w-2/3 text-gray-800 mt-4">
          {product?.description || "No description available."}
        </p>
        {product && (
          <>
            <div className="w-full md:w-1/3 space-y-6 mt-16">
              <h2 className="text-2xl font-bold">Xususiyatlari</h2>
              <div className="flex justify-between items-center">
                <p>Price</p>
                <p className="text-lg font-semibold text-gray-800">
                  ${product.price}
                </p>
              </div>
              <div className="flex justify-between items-center">
                <p>Stock</p>
                <p className="text-lg font-semibold text-gray-800">
                  {product.stock}
                </p>
              </div>
              <div className="flex justify-between items-center">
                <p>Category</p>
                <p className="text-lg font-semibold text-gray-800">
                  {product.category}
                </p>
              </div>
              <div className="flex justify-between items-center">
                <p>Brand</p>
                <p className="text-lg font-semibold text-gray-800">
                  {product.brand}
                </p>
              </div>
            </div>
          </>
        )}
      </div>
      <div className="p-6 container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mt-8 gap-4">
          <h2 className="text-2xl font-bold text-center md:text-left">
            Shu kategoriyadagi mahsulotlar
          </h2>
          <div className="flex gap-4">
            <button
              onClick={handlePrev}
              className="p-3 border rounded-lg hover:bg-gray-200 transition"
            >
              <FiChevronLeft size={24} />
            </button>
            <button
              onClick={handleNext}
              className="p-3 border rounded-lg hover:bg-gray-200 transition"
            >
              <FiChevronRight size={24} />
            </button>
          </div>
        </div>

        {isRelatedLoading ? (
          <p className="text-center text-lg mt-6">Yuklanmoqda...</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-6">
            {visibleProducts.map((relatedProduct) => (
              <div
                key={relatedProduct.id}
                className="p-4 bg-white shadow-md rounded-lg transition-transform transform hover:scale-105"
              >
                <Link
                  to={`/products/${relatedProduct.id}`}
                  onClick={() => window.scrollTo(0, 0)}
                >
                  <img
                    src={relatedProduct.thumbnail}
                    alt={relatedProduct.title}
                    className="w-full h-48 object-cover rounded-md border"
                  />
                </Link>
                <div className="bg-gray-100 py-4 px-4 mt-4 rounded-lg">
                  <h2 className="text-lg font-semibold">
                    {relatedProduct.title}
                  </h2>
                  <div className="flex justify-between text-gray-600 mt-3 text-sm">
                    <span>Brand:</span>
                    <span className="font-medium">{relatedProduct.brand}</span>
                  </div>
                  <div className="flex justify-between text-gray-600 text-sm">
                    <span>Category:</span>
                    <span className="font-medium">
                      {relatedProduct.category}
                    </span>
                  </div>
                  <div className="mt-6 flex flex-col sm:flex-row gap-4">
                    <button
                      onClick={() => handleCart}
                      className="w-full bg-[#FF6418] text-white px-6 py-3 rounded-full font-semibold transition hover:bg-[#e55a16]"
                    >
                      Sotib olish
                    </button>
                    <button className="bg-white p-3 rounded-full border hover:bg-gray-200 transition">
                      <BsCart3 size={20} className="text-gray-800" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;
