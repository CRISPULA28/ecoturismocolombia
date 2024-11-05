import './home.css';
import Slider from "react-slick";


export function Home() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div>
    <div className="login-container">
      <h2>¡BIENVENIDOS!</h2>
      <p>
        Nuestro proposito es darte a conocer las diferentes experiencias que
        existen en nuestro pais. ¡Enamorarte a traves de sus maravillosos lugares!
      </p>
      <p></p><p></p><p></p><p></p><p></p><p></p><p></p>
    </div>
    
    <Slider {...settings}>
    <link
  rel="stylesheet"
  type="text/css"
  charSet="UTF-8"
  href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
  />

  <link
  rel="stylesheet"
  type="text/css"
  href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
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
      </Slider>
      </div>
  );
}
export default Home;
