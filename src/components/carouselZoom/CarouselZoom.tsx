import "./carouselZoom.css";
import { useEffect, useRef } from "react";

const CarouselZoom = () => {
     
    const contImgHome = useRef <HTMLDivElement | null> (null);                       /*Efecto zoom de imagenes en portada de Home. Trabaja junto con CSS: .contImgHome .imgHome @keyframes zoomHome */
    useEffect(() => {
        if (!contImgHome.current) return;
              
        const imgs = contImgHome.current.querySelectorAll(".imgHome");
        const texts = contImgHome.current.querySelectorAll(".imgHomeTextCont");
        let i = 0;
        imgs[i].classList.add("zoomOut");
        texts[i].classList.add("textOut");
                
        const carousel = () => {
            if (i === imgs.length) i = 0;
            if (!i) {
                imgs[imgs.length - 1].classList.add("zoomOut");
                texts[texts.length - 1].classList.add("textOut");
            } else {
                imgs[i - 1].classList.add("zoomOut");
                texts[i - 1].classList.add("textOut");
            }
            imgs[i].classList.remove("zoomIn", "zoomOut");          //Los métodos de modificación de clases son asincrónicos, por eso el setTimeout
            texts[i].classList.remove("textIn", "textOut");
            setTimeout(() => {
                imgs[i].classList.add("zoomIn");
                texts[i].classList.add("textIn");
                i = i + 1;
            }, 100);
            
            setTimeout(() => {
                carousel();
            }, 14000);
        };
        carousel();
    
    }, []);

    return (
        <div className='contImgHome flex' ref={contImgHome}>
            <div className='imgHomeCont flex'>
                <img src="/images/carousel/2.jpg" alt="Carousel" className='imgHome'/> 
                <div className='imgHomeTextCont flex column'>
                    <div className='imgHomeText1Cont flex column'>
                        <div className='flex column'>
                            <img src="/images/logos/logo1.png" alt="Logo" className='imgHomeLogo logoAdjust'/>
                            <p className='imgHomeText1'>Abogados Nación</p>
                        </div>
                        <img src="/images/assets/line.png" alt="Line" className='imgHomeLine' />
                    </div>
                    <p className='imgHomeText2'>Somos especialistas <br /> en derecho penal</p>
                </div>
            </div>
            <div className='imgHomeCont flex'>
                <img src="/images/carousel/4.jpg" alt="Carousel" className='imgHome'/> 
                <div className='imgHomeTextCont flex column'>
                    <div className='imgHomeText1Cont flex column'>
                        <div className='flex column'>
                            <img src="/images/logos/logo1.png" alt="Logo" className='imgHomeLogo'/>
                            <p className='imgHomeText1'>Abogados Nación</p>
                        </div>
                        <img src="/images/assets/line.png" alt="Line" className='imgHomeLine' />
                    </div>
                    <p className='imgHomeText2'>Urgencias penales<br /> las 24hs</p>
                </div>
            </div>
            <div className='imgHomeCont flex'>
                <img src="/images/carousel/3.jpg" alt="Carousel" className='imgHome'/> 
                <div className='imgHomeTextCont flex column'>
                    <div className='imgHomeText1Cont flex column'>
                        <div className='flex column'>
                            <img src="/images/logos/logo1.png" alt="Logo" className='imgHomeLogo'/>
                            <p className='imgHomeText1'>Abogados Nación</p>
                        </div>
                        <img src="/images/assets/line.png" alt="Line" className='imgHomeLine' />
                    </div>
                    <p className='imgHomeText2'>Oficinas <br /> en C.A.B.A</p>
                </div>
            </div>
            <div className='imgHomeCont flex'>
                <img src="/images/carousel/4.jpg" alt="Carousel" className='imgHome'/> 
                <div className='imgHomeTextCont flex column'>
                    <div className='imgHomeText1Cont flex column'>
                        <div className='flex column'>
                            <img src="/images/logos/logo1.png" alt="Logo" className='imgHomeLogo'/>
                            <p className='imgHomeText1'>Abogados Nación</p>
                        </div>
                        <img src="/images/assets/line.png" alt="Line" className='imgHomeLine' />
                    </div>
                    <p className='imgHomeText2'>Excarcelación <br /> Visitas en penales</p>
                </div>
            </div>
        </div>
    );
};

export default CarouselZoom;
