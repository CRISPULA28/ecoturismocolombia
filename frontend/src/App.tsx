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
        original: "https://turismo.culturamix.com/blog/wp-content/gallery/cresce-o-turismo-de-aventura-1/thumbs/thumbs_Cresce-o-Turismo-de-Aventura-2.jpg",
      },
      {
        original: "https://cdn.colombia.com/sdi/2021/07/15/turismo-en-colombia-5-destinos-para-amantes-de-la-naturaleza-934385.jpg",
        
      },
      {
        original: "https://definicion.de/wp-content/uploads/2011/11/turismoaventura.jpg",
      },
      {
        original:"https://cerebriti.b-cdn.net/uploads/decbb0094902b57388fcd0a4657e7dfb.jpg",
      },
      {
        original:"https://2.bp.blogspot.com/_J3SyE8rZoC0/TNszeETJooI/AAAAAAAAAAs/h0RL_VB9bzc/s1600/foto3.jpg",
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


