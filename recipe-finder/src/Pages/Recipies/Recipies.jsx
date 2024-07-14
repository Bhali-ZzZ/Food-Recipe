import React from 'react';
import './Recipies.css';
import { Link } from 'react-router-dom';

const Recipies = ({ recipe }) => {
  const buttons = [
    "recipe & menus",
    "Share your Recipe",
    "Custom meal plan",
    "Create grocery Store",
    "Cooking Tips & tricks"
  ];

  const colors = [
    '#FF5733', // red
    '#33FF57', // green
    '#3357FF', // blue
    '#F39C12', // orange
    '#9B59B6'  // purple
  ];

  if (!recipe) {
    return <div>Loading...</div>; // Optional: Handle loading state
  }

  return (
    <div className='container'>
      <div className='buttons'>
        {buttons.map((element, index) => (
          <div key={index} className='btns'>
            <button style={{ backgroundColor: colors[index] }}>{element}</button>
          </div>
        ))}
      </div>
      <div className='recipies'>
        <h4>Featured Recipes</h4>
        <div className='row'>
          {recipe.slice(0, 6).map((element, index) => (
            <Card key={index} element={element} />
          ))}
        </div>
        <h4>Recommended Recipes</h4>
        <div className='row'>
          {recipe.slice(6).map((element, index) => (
            <Card key={index} element={element} />
          ))}
        </div>
      </div>
    </div>
  );
};

const Card = ({ element }) => {
  return (
    <Link to={`/recipe/${element.id}`} className='col-md-4 recipe-title'>
      <img src={element.image} alt='Recipe' />
      <h4>{element.title}</h4>
      <p>{element.cookingTime}</p>
    </Link>
  );
};

export default Recipies;
