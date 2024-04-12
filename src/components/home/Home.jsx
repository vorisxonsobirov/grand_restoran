import React from 'react';
import { Carousel } from 'antd';
import Menu from "../menu/Menu"
import img1 from "../assets/slider_1609588775.jpg";
import img2 from "../assets/slider_1645260748.jpg";
import img3 from "../assets/slider_uz1630925972.jpg";
import img4 from "../assets/slider_uz1633757813.jpg";
import img5 from "../assets/slider_uz1633758267.jpg";
import img6 from "../assets/slider_uz1634018278.jpg";

const contentStyle = {
  height: '92vh',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};
const Home = () => (
  <>
    <div className="container">
      <Carousel autoplay>
        <div>
          <img style={contentStyle} src={img1} alt="" />
        </div>
        <div>
          <img style={contentStyle} src={img2} alt="" />
        </div>
        <div>
          <img style={contentStyle} src={img3} alt="" />
        </div>
        <div>
          <img style={contentStyle} src={img4} alt="" />
        </div>
        <div>
          <img style={contentStyle} src={img5} alt="" />
        </div>
        <div>
          <img style={contentStyle} src={img6} alt="" />
        </div>
      </Carousel>
      {/* <Menu /> */}
    </div>
  </>

);
export default Home;