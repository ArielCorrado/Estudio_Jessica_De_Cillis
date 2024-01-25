import React from 'react';
import "./carouselZoom.css";
import { useEffect, useRef } from 'react';

const CarouselZoom = () => {
     
    const contImgHome = useRef();                       /*Efecto zoom de imagenes en portada de Home. Trabaja junto con CSS: .contImgHome .imgHome @keyframes zoomHome */
    useEffect(() => {
        const imgs = contImgHome.current.childNodes;
        let i = 0;
        imgs[i].classList.add("zoomOut");
                
        const carousel = () => {
            if (i === imgs.length) i = 0;
            if (!i) {
                imgs[imgs.length - 1].classList.add("zoomOut");
            } else {
                imgs[i - 1].classList.add("zoomOut");
            }
            imgs[i].classList.remove("zoomIn", "zoomOut");          //Los métodos de modificación de clases son asincrónicos, por eso el setTimeout
            setTimeout(() => {
                imgs[i].classList.add("zoomIn");
                i = i + 1;
            }, 100);
            
            setTimeout(() => {
                carousel();
            }, 14000);
        }
        carousel()
    
    }, []);

    return (
        <div className='contImgHome flex' ref={contImgHome} id="inicio">
            <img src="/images/carousel/1.jpg" alt="" className='imgHome'/> 
            <img src="/images/carousel/2.jpg" alt="" className='imgHome'/> 
            <img src="/images/carousel/3.jpg" alt="" className='imgHome'/> 
            <img src="/images/carousel/4.jpg" alt="" className='imgHome'/> 
        </div>
    );
}

export default CarouselZoom;
