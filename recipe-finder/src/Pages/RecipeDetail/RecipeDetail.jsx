import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import "./RecipeDetail.css"

const RecipeDetail = ({ recipe }) => {
  const { id } = useParams();
  const [recipeDetail, setRecipeDetail] = useState({});

  useEffect(() => {
    const filteredRecipe = recipe.find(recip => recip.id === id);
    if (filteredRecipe) {
      setRecipeDetail(filteredRecipe);
    }
  }, [id, recipe]);

  return (
    <div className='container recipe-detail'>
    <h1>RECIPE DETAILS</h1>
      <img src={recipeDetail.image} alt={recipeDetail.title} />
      <h2>Description</h2>
      <p>{recipeDetail.description}</p>
      <h2>INGREDIENTS</h2>
      <ul>
        {/* Ensure proper rendering of ingredients */}
        {recipeDetail.ingredients && recipeDetail.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <h2>Steps</h2>
      <ul>
        {recipeDetail.steps && recipeDetail.steps.map((step, index) => (
          <li key={index}>{step}</li>
        ))}
      </ul>
      
    </div>
  );
};

export default RecipeDetail;
