import './home.css';
import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export function Home() {

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500

  return (
    <div className="login-container">
      <h2>¡BIENVENIDOS!</h2>

      <p>
        Nuestro proposito es darte a conocer las diferentes experiencias que
        existen en nuestro pais. ¡Enamorarte a traves de sus maravillosos lugares!
      </p>
    </div>


<Slider {...settings}>
<link
  rel="stylesheet"
  type="text/css"
  charset="UTF-8"
  href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
/>

  <div>
    <h3>1</h3>
  </div>
  <div>
    <h3>2</h3>
  </div>
  <div>
    <h3>3</h3>
  </div>
  <div>
    <h3>4</h3>
  </div>
  <div>
    <h3>5</h3>
  </div>
  <div>
    <h3>6</h3>
  </div>
  <link
  rel="stylesheet"
  type="text/css"
  href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
/>
</Slider>
</div>
  );
}

export default Home;
