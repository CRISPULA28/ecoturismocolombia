import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { App } from './App.tsx';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css"
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);

function carrusel(){
  const images = [
    {
      original: "https://picsum.photos/seed/picsum/1018/1000",
      thumbnail: "https://picsum.photos/seed/picsum/1018/250/150",
    }
  
  ]

  return(
    <div>
      <ImageGallery  items={images}/>

      
    </div>
  )
}

export default carrusel;


