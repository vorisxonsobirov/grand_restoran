import React, { useState } from 'react';
import './foodCategory.css';
import { Link } from 'react-router-dom';
import dishCardsByCategory from "../../data/DishCards/DishCardsByCategory"

const FoodCategory = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const foodCategories = [
    'Milliy taomlar',
    'Fast Food',
    'Evropa taomlar',
    'Salatlar',
    'Desertlar',
    'Ichimlik',
    'Noxorgi taomlar',
    'Muzqaymoq',
    'Milliy taomlar',
    'Fast Food',
    'Evropa taomlar',
    'Salatlar',
    'Desertlar',
    'Ichimlik',
    'Noxorgi taomlar',
    'Muzqaymoq',
    'Milliy taomlar',
    'Fast Food',
    'Evropa taomlar',
    'Salatlar',
    'Desertlar',
    'Ichimlik',
    'Noxorgi taomlar',
    'Muzqaymoq'
  ];



  const showDishes = (category) => {
    setSelectedCategory(category);
  };

  const hideDishes = () => {
    setSelectedCategory(null);
  };

  return (
    <div className="food-category-container">
      {foodCategories.map((category, index) => (
        <div key={index} className="food-category-item">
          <button onClick={() => showDishes(category)}>{category}</button>
        </div>
      ))}
      {selectedCategory && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={hideDishes}>&times;</span>
            <h2>{selectedCategory}</h2>
            <div className="dish-cards-container">























              
              {dishCardsByCategory[selectedCategory].map((dish, index) => (
                <div key={index} className="dish-card">
                  <h3>{dish.name}</h3>
                  <p>{dish.description}</p>
                  <Link to={`/dish/${dish.name}`}>Подробнее</Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FoodCategory;
