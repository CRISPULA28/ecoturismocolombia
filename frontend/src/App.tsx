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
        original: "https://picsum.photos/seed/picsum/100/50",
      },
      {
        original: "https://cdn.colombia.com/sdi/2021/07/15/turismo-en-colombia-5-destinos-para-amantes-de-la-naturaleza-934385.jpg/100/50",
        
      },
    
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


