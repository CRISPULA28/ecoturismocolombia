import { Route, Routes } from 'react-router-dom';
import { Header } from './components/header';
import { Home } from './pages/home/home';
import { Login } from './pages/login/login';
import { Destino } from './pages/destino/destino';
import {Actividades} from './pages/actividades/actividades';
import {Registrarse} from './pages/registrarse/registrarse';

import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css"


export function App() {

      const images = [

        
      {
        original: "https://pxsports.com/wp-content/uploads/2017/10/buceo-.jpg",
      },
      {
        original: "https://www.mexicodesconocido.com.mx/wp-content/uploads/2021/06/4675F653-BBA4-4316-8E08-DA61583B9264.jpeg",
        
      },
      {
        original: "https://www.viajerosenruta.com/wp-content/uploads/2021/05/bungee-turismo-de-aventura-1.jpg",
      },
      {
        original: "https://reportelobby.info/wp-content/uploads/2023/01/TURISMO_DE_AVENTURA_REPORTE_LOBBY_06--1024x576.jpg",
      },
      {
        original:"https://www.turiscom.org/media/turismo/images/2020/05/26/2020052612544841908.jpg",
      }

    
    ]
  
    
  return (
    <div>
     <div>
      <Header />
      
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Destino" element={<Destino />} />
        <Route path="/Actividades" element={<Actividades />} />
        <Route path="/Registrarse" element={<Registrarse />} />
        
      </Routes>
    </div>
    
    <div>
        <ImageGallery  items={images}/>
  
        
    </div>
    </div>

  );
}


