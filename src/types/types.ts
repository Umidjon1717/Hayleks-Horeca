export interface IProduct {
    id: number;
    title: string;
    description: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    brand: string;
    category: string;
    thumbnail: string;
    images: string[];
  }
  
  export interface IGetResponseProducts {
    products: IProduct[];
    total: number;
    skip: number;
    limit: number;
  }
  
  export interface IProductQuery {
    limit?: number;
    skip?: number;
  }

  export interface IRecipe {
    id: number;
    name: string;
    ingredients: string[];
    instructions: string[];
    prepTimeMinutes: number;
    cookTimeMinutes: number;
    servings: number;
    difficulty: "Easy" | "Medium" | "Hard";
    cuisine: string;
    caloriesPerServing: number;
    tags: string[];
    userId: number;
    image: string;
    rating: number;
    reviewCount: number;
    mealType: string[];
  }
  
  export interface IGetResponseRecipes {
    recipes: IRecipe[];
    total: number;
    skip: number;
    limit: number;
  }
  
  export interface IRecipeQuery {
    limit?: number;
    skip?: number;
  }
  
  