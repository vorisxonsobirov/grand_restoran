import React, { useState } from 'react';
import './foodCategory.css';
import { Link } from 'react-router-dom';
import dishCardsByCategory from "../../data/DishCards/DishCardsByCategory";

import img1 from "../../data/DishImg/milliyTaomlar.jpg"
import img2 from "../../data/DishImg/desertlar.jpg"
import img3 from "../../data/DishImg/evropaTaomlari.jpg"
import img4 from "../../data/DishImg/fastFood.jpg"
import img5 from "../../data/DishImg/ichimliklar.jpg"
import img6 from "../../data/DishImg/morojna.jpg"
import img7 from "../../data/DishImg/nonushta.jpg"
import img8 from "../../data/DishImg/salat.jpg"


const FoodCategory = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const foodCategories = [
    { name: 'Milliy taomlar',   image: img1 },
    { name: 'Fast Food',        image: img2 },
    { name: 'Evropa taomlar',   image: img3 },
    { name: 'Salatlar',         image: img4 },
    { name: 'Desertlar',        image: img5 },
    { name: 'Ichimlik',         image: img6 },
    { name: 'Noxorgi taomlar',  image: img7 },
    { name: 'Muzqaymoq',        image: img8 }, 
    { name: 'Milliy taomlar',   image: img1 },
    { name: 'Fast Food',        image: img2 },
    { name: 'Evropa taomlar',   image: img3 },
    { name: 'Salatlar',         image: img4 },
    { name: 'Desertlar',        image: img5 },
    { name: 'Ichimlik',         image: img6 },
    { name: 'Noxorgi taomlar',  image: img7 },
    { name: 'Muzqaymoq',        image: img8 }, 
    { name: 'Milliy taomlar',   image: img1 },
    { name: 'Fast Food',        image: img2 },
    { name: 'Evropa taomlar',   image: img3 },
    { name: 'Salatlar',         image: img4 },
    { name: 'Desertlar',        image: img5 },
    { name: 'Ichimlik',         image: img6 },
    { name: 'Noxorgi taomlar',  image: img7 },
    { name: 'Muzqaymoq',        image: img8 }, 
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
          <button className='imgBtn' onClick={() => showDishes(category)}>
            <img  src={category.image} alt="" />
          </button>
            <span>{category.name}</span> 
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
