import React, { useState } from "react";
import "./App.css";
import RecipeCreate from "./RecipeCreate";
import RecipeList from "./RecipeList";
import RecipeData from "./RecipeData"

function App() {
  const [recipes, setRecipes] = useState(RecipeData);
  console.log(recipes)
  const deleteRecipes=(index,e)=>{
    setRecipes(recipes.filter((v,i)=>i!==index))
  }

  // TODO: Add the ability for the <RecipeList /> component to list and delete an existing recipe.
  // TODO: Add the ability for the <RecipeCreate /> component to create new recipes.

  
  return (
    <div className="App">
      <header><h1 style={{fontFamily:"Playfair Display SC", textAlign:"center", fontSize:"64px" }}>Delicious Food Recipes</h1></header>
      <RecipeList recipes={recipes}  deleteRecipes={deleteRecipes} />
      <RecipeCreate setRecipes={setRecipes}  />
    </div>
  );
}

export default App;
