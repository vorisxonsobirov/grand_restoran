import React from 'react'
import "./menu.css"
import FoodCategory from './foodCategory/FoodCategory'

const Menu = () => {
  return (
    <div className='container'>
      <div className="menu_holder">
        <FoodCategory />
      </div>
    </div>
  )
}

export default Menu
