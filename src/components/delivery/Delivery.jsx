import React from 'react'
import "./delivery.css"
import map from "../assets/slider_uz1633757813.jpg"
import Map from './Map'

const Delivery = () => {
  return (
      <>
      <div className="container"> 
        <div className="main_holder_in_delivery">
          <div className="txt_holder">
              <h1>Lorem, ipsum dolor sit amet consectetur adipisicing.</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat, culpa id nemo expedita voluptates quae quod maiores recusandae voluptatibus porro labore voluptatem nihil mollitia ducimus, inventore harum sit perferendis sapiente!</p>
          </div>
          <div className="map_holder">
              <Map/>
          </div>
        </div>
      </div>
      </>
  )
}

export default Delivery
