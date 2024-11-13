import './home.css';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css"


export function Home() {

  
  const images = [

    {
      original: "https://www.viajerosenruta.com/wp-content/uploads/2021/05/bungee-turismo-de-aventura-1.jpg",
    },
    {
      original: "https://reportelobby.info/wp-content/uploads/2023/01/TURISMO_DE_AVENTURA_REPORTE_LOBBY_06--1024x576.jpg",
    },
    {
      original:"https://www.turiscom.org/media/turismo/images/2020/05/26/2020052612544841908.jpg",
    },
   ] 

    
  return (
    <div>
      <div className="login-container">
        <h2>¡BIENVENIDOS!</h2>

        <p>
          Nuestro proposito es darte a conocer las diferentes experiencias que
          existen en nuestro pais. ¡Enamorarte a traves de sus maravillosos lugares!
        </p>
      </div>
       <div>
        <ImageGallery  items={images}/>
        
      </div>
    </div>
  )
}

export default Home;
