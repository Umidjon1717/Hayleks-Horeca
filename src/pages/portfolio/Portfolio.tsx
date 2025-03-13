import { useState } from "react";
import { useGetRecipesQuery } from "../../redux/api";
import { IRecipe } from "../../types/types";
import { useNavigate } from "react-router-dom";

const Portfolio: React.FC = () => {
  const { data, isLoading, error } = useGetRecipesQuery();
  const recipes = data?.recipes || [];
  const navigate = useNavigate();
  const [selectedCuisine, setSelectedCuisine] = useState("");

  if (isLoading)
    return <p className="text-center text-gray-500">Loading recipes...</p>;
  if (error)
    return <p className="text-center text-red-500">Failed to load recipes</p>;

  const filteredRecipes = selectedCuisine
    ? recipes.filter((recipe: IRecipe) => recipe.cuisine === selectedCuisine)
    : recipes;

  return (
    <div className="max-w-7xl mx-auto p-6">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-3xl font-bold">All Recipes</h2>
        <select
          className="border rounded-md px-3 py-2"
          value={selectedCuisine}
          onChange={(e) => setSelectedCuisine(e.target.value)}
        >
          <option value="">All Cuisines</option>
          {Array.from(new Set(recipes.map((r: IRecipe) => r.cuisine))).map(
            (cuisine) => (
              <option key={cuisine as string} value={cuisine as string}>
                {cuisine as string}
              </option>
            )
          )}
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredRecipes.map((recipe: IRecipe) => (
          
          <div
            key={recipe.id}
            className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition"
            onClick={() => {
              navigate(`/recipes/${recipe.id}`);
              window.scrollTo(0, 0);
            }} >  
            <img
              src={recipe.image}
              alt={recipe.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold">{recipe.name}</h3>
              <p className="text-gray-600 text-sm">{recipe.cuisine} Cuisine</p>
              <p className="text-gray-700 text-sm mt-2">
                {recipe.difficulty} | {recipe.servings} servings
              </p>
              <button className="mt-4 text-[#F27F62] hover:underline">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>

      <button
        className="mt-10 block mx-auto bg-[#F27F62] text-white px-6 py-2 rounded-lg hover:bg-[#e56a50]"
        onClick={() => navigate(-1)}
      >
        Go Back
      </button>
    </div>
  );
};

export default Portfolio;
