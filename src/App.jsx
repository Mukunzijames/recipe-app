import { useEffect, useState } from "react";
import React from "react";

import RecipeCard from "./component/RecipeCard";
import searchRecipes from "./component/searchRecipes"





const mealApi = "https://www.themealdb.com/api/json/v1/1/search.php?s=";

function App() {
  const [isLoading , setIsLoading] = useState (false);
  const [query, setQuery] = useState ("");
  const [recipes, setRecipes] = useState ([]);


  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const url = mealApi + query;
        const res = await fetch(url);
        const data = await res.json();
        console.log(data);
        setRecipes(data.meals);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setIsLoading(false);
      }
    };
  
    fetchData();
  }, [query]);
  
  
const handleSubmit  = event =>{
  event.preventDefault()
  searchRecipes()
}
  
  return (
    <div className="container bg-white  border-2 m-8 ">
<searchRecipes
handleSubmit={handleSubmit}
value={query}
onChange={event => setQuery(event.target.value)}
isLoading={isLoading}

/>


  <h1 className="text-center pl-10 text-3xl italic font-serif  text-red-300 pt-7 ">Start using your kitchen</h1>
  <div className="recipes flex flex-wrap justify-center mt-5 ">
    {recipes ? (
      recipes.map(recipe => (
        <RecipeCard
          key={recipe.idMeal}
          recipe={recipe}
        />
      ))
    ) : (
      "No meals!"
    )}
  </div>
</div>

  );
}

export default App;
