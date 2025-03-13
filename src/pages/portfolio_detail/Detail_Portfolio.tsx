import { useParams } from "react-router-dom";
import { useGetRecipesQuery } from "../../redux/api";
import { IRecipe } from "../../types/types";
import Contact from "../contact/Contact";

const PortfolioDetail: React.FC = () => {
  const { id } = useParams();
  const { data, isLoading, error } = useGetRecipesQuery();

  if (isLoading) return <p className="text-center text-gray-500">Loading...</p>;
  if (error)
    return <p className="text-center text-red-500">Failed to load recipe</p>;

  const recipe = data?.recipes.find((r: IRecipe) => r.id.toString() === id);

  if (!recipe)
    return <p className="text-center text-gray-500">Recipe not found</p>;

  return (
    <div>
      <div className="container mx-auto p-4 md:p-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 bg-white overflow-hidden">
          <div className="p-4 md:p-6">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900">{recipe.name}</h2>
            <p className="text-gray-600 text-md md:text-lg mt-1">{recipe.cuisine} Cuisine</p>
            <p className="text-gray-500 mt-1 text-sm md:text-base">
              Difficulty: {recipe.difficulty} | Servings: {recipe.servings}
            </p>

            <div className="mt-4 space-y-2">
              <p className="text-gray-700 text-sm md:text-base">
                <span className="font-semibold">Prep Time:</span> {recipe.prepTimeMinutes} min
              </p>
              <p className="text-gray-700 text-sm md:text-base">
                <span className="font-semibold">Cook Time:</span> {recipe.cookTimeMinutes} min
              </p>
              <p className="text-gray-700 text-sm md:text-base">
                <span className="font-semibold">Calories:</span> {recipe.caloriesPerServing} kcal per serving
              </p>
            </div>

            <div className="mt-6">
              <h3 className="text-lg md:text-xl font-semibold">Ingredients:</h3>
              <ul className="list-disc pl-4 text-gray-700 mt-2 space-y-1 text-sm md:text-base">
                {recipe.ingredients.map((ingredient: string, index: number) => (
                  <li key={index}>{ingredient}</li>
                ))}
              </ul>
            </div>

            <div className="mt-6">
              <h3 className="text-lg md:text-xl font-semibold">Instructions:</h3>
              <ol className="list-decimal pl-4 text-gray-700 mt-2 space-y-1 text-sm md:text-base">
                {recipe.instructions.map((step: string, index: number) => (
                  <li key={index}>{step}</li>
                ))}
              </ol>
            </div>

            <div className="mt-6 flex items-center space-x-3 text-sm md:text-base">
              <span className="text-gray-700 font-semibold">Rating:</span>
              <span className="text-lg text-yellow-500">⭐ {recipe.rating}</span>
              <span className="text-gray-500">({recipe.reviewCount} reviews)</span>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 my-6">
              <button className="border-gray-600 border px-6 py-3 rounded-full text-sm md:text-base w-full sm:w-auto">
                Bepul maslahat oling
              </button>
              <button className="bg-[#FF6418] text-white px-6 py-3 rounded-full text-sm md:text-base w-full sm:w-auto">
                Men ham shunday xohlayman
              </button>
            </div>
          </div>

          <div className="w-full h-64 md:h-full">
            <img
              src={recipe.image}
              alt={recipe.name}
              className="w-full h-full object-cover rounded-md"
            />
          </div>
        </div>
      </div>
      <Contact />
    </div>
  );
};

export default PortfolioDetail;
