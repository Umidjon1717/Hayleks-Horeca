import { useState } from "react";
import { useGetRecipesQuery } from "../../redux/api";
import { IRecipe } from "../../types/types";
import { ChevronLeft, ChevronRight, CheckCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

const PortfolioHome: React.FC = () => {
  const { data } = useGetRecipesQuery();
  const recipes = data?.recipes || [];
  const navigate=useNavigate();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selectedRecipe = recipes[selectedIndex];

  const [visibleCount] = useState(8);

  const handleNavigate=()=>{
    navigate(`/recipes/${selectedRecipe.id}`)
    window.scrollTo(0,0)
  }

  const handleNext = () => {
    if (selectedIndex < recipes.length - 1) {
      setSelectedIndex(selectedIndex + 1);
    }
  };

  const handlePrev = () => {
    if (selectedIndex > 0) {
      setSelectedIndex(selectedIndex - 1);
    }
  };

  const handleRecipeClick = (index: number) => {
    setSelectedIndex(index);
  };

  return (
    <div className="container mx-auto my-8 px-4 sm:px-6 lg:px-8">
      <div className="flex items-center space-x-4">
        <div className="w-4 h-4 bg-black mt-1"></div>
        <h2 className="text-2xl sm:text-3xl font-bold">Recipe Portfolio</h2>
      </div>

      {selectedRecipe && (
        <div className="mt-8 flex flex-col lg:flex-row items-start gap-6">
          <div className="flex-1 relative">
            <img
              src={selectedRecipe.image}
              alt={selectedRecipe.name}
              className="w-full max-w-2xl h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] object-cover rounded-lg shadow-md"
            />

            <button
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white text-black p-2 rounded-xl shadow-md hover:bg-gray-200 disabled:opacity-50"
              onClick={handlePrev}
              disabled={selectedIndex === 0}
            >
              <ChevronLeft size={30} />
            </button>

            <button
              className="absolute right-4 md:right-8 top-1/2 transform -translate-y-1/2 bg-white text-black p-2 rounded-xl shadow-md hover:bg-gray-200 disabled:opacity-50"
              onClick={handleNext}
              disabled={selectedIndex === recipes.length - 1}
            >
              <ChevronRight size={30} />
            </button>
          </div>

          <div className="flex-1 flex flex-col justify-between h-auto md:h-[400px] space-y-6">
            <div>
              <h3 className="text-2xl sm:text-3xl font-semibold">{selectedRecipe.name}</h3>
              <p className="text-gray-600 mt-2 text-sm sm:text-base">
                Cuisine: {selectedRecipe.cuisine}
              </p>
              <p className="text-gray-700 mt-2 text-sm sm:text-base">
                {selectedRecipe.difficulty} | {selectedRecipe.servings} servings
              </p>
              <p className="mt-4 text-xs sm:text-sm text-gray-500 leading-relaxed">
                {selectedRecipe.ingredients.join(", ")}
              </p>
              <button onClick={() => handleNavigate()} className="text-[#F27F62] my-6 sm:my-8">
                [ Batafsil ko‘rish ]
              </button>
            </div>

            <div className="flex flex-wrap gap-3 mt-8 sm:mt-12 md:mt-20">
              {recipes.slice(0, visibleCount).map((recipe: IRecipe, index: number) => (
                <div key={recipe.id} className="relative">
                  <img
                    src={recipe.image}
                    alt={recipe.name}
                    className={`w-16 h-16 sm:w-20 sm:h-20 object-cover rounded-md cursor-pointer border-2 transition ${
                        selectedIndex === index ? "border-black" : "border-transparent"
                      }`}
                    onClick={() => handleRecipeClick(index)}
                  />
                  {selectedIndex === index && (
                    <CheckCircle
                      className="absolute top-1 right-1 text-green-500 bg-white rounded-full"
                      size={20}
                    />
                  )}
                </div>
              ))}
              <br />
              <button onClick={() => navigate('/portfolio')} className="text-[#F27F62] mt-6 ">
                [ Barcha loyihani ko‘rish ]
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PortfolioHome;
