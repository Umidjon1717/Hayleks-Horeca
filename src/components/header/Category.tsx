import { useState } from "react";
import { TbGridDots } from "react-icons/tb";
import { useGetCategoryListQuery } from "../../redux/productApi";

const CategoryModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { data: categories, isLoading, error } = useGetCategoryListQuery();

  return (
    <div>
      <div
        className="flex text-white px-7 rounded-3xl py-2 gap-3 bg-[#014D81] cursor-pointer"
        onClick={() => setIsOpen(true)}
      >
        <TbGridDots className="mt-1" />
        <button>Katalog</button>
      </div>

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-start pt-10 z-50">
          <div className="bg-white w-96 p-5 rounded-lg shadow-lg transform transition-transform duration-300 animate-slide-down">
            <h2 className="text-xl font-bold mb-3">Categories</h2>

            {isLoading ? (
              <p>Loading categories...</p>
            ) : error ? (
              <p className="text-red-500">Error loading categories</p>
            ) : (
              <ul className="space-y-2">
                {categories?.map((category) => (
                  <li key={category} className="p-2 border-b">
                    {category}
                  </li>
                ))}
              </ul>
            )}

            <button
              className="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg"
              onClick={() => setIsOpen(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}

      <style>
        {`
          @keyframes slideDown {
            from { transform: translateY(-100%); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
          }
          .animate-slide-down {
            animation: slideDown 0.3s ease-out;
          }
        `}
      </style>
    </div>
  );
};

export default CategoryModal;
