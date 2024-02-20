import "./footer.css";
import { getREM } from "../../utils/utils";
import { useEffect } from "react";

export default function Footer () {

    useEffect(() => {

        /* Oculta los textos de los iconos de redes a menos de 14 REM */
        
        const networksCont = document.querySelector(".footerLogoAndNetworks_networksCont") as HTMLDivElement;
        const footerNetworkText = document.querySelectorAll(".footerNetworkText") as NodeListOf<HTMLParagraphElement>;  

        const adjustnetworksContStyle = () => {
            const networksContWidth = networksCont.offsetWidth;
            const REM = getREM();
            if (networksContWidth < REM * 14) {
                footerNetworkText.forEach((el) => el.style.display = "none");
            } else {
                footerNetworkText.forEach((el) => el.style.display = "flex");
            }
        };

        window.addEventListener("resize", adjustnetworksContStyle);
        window.addEventListener("orientationchange", adjustnetworksContStyle);
    }, []);
          
    return (
        <div className="footerCont flex column">
            <div className="footerInfoCont flex">
                <div className="footerLogoAndNetworksCont footerSection flex column">
                    <img src="/images/logos/logo1.png" alt="Logo" className="logoFooter logoAdjust"/>
                    <p className="footer_small_text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt illum, voluptatem autem delectus voluptatum corporis eaque. Doloremque maxime sit quo vitae id, illum dolore vero facere voluptatibus enim quaerat repellat?</p>
                    <div className="footerLogoAndNetworks_networksCont flex">
                        <div className="footerLogoAndNetworks_netWorkCont flex column">
                            <img src="/images/icons/instagram.png" alt="Instagram icon" className="footer_icon icon_invert"/>
                            <p className="footerNetworkText">Instagram</p>
                        </div>
                        <div className="footerLogoAndNetworks_netWorkCont flex column">
                            <img src="/images/icons/facebook.png" alt="Facebook icon" className="footer_icon icon_invert"/>
                            <p className="footerNetworkText">Facebook</p>
                        </div>
                        <div className="footerLogoAndNetworks_netWorkCont flex column">
                            <img src="/images/icons/linkedin.png" alt="Linkedin icon" className="footer_icon icon_invert"/>
                            <p className="footerNetworkText">Linkedin</p>
                        </div>
                        <div className="footerLogoAndNetworks_netWorkCont flex column">
                            <img src="/images/icons/x.png" alt="X icon" className="footer_icon icon_invert"/>
                            <p className="footerNetworkText">X</p>
                        </div>
                    </div>
                </div>
                <div className="footerLinksCont footerSection flex column">
                    <div className="flex">
                        <img src="/images/icons/links.png" alt="Links" className="footerIconTitles"/>
                        <p className="footerTitles">Enlaces relevantes</p>
                    </div>
                    <p className="footer_small_text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo deserunt, quaerat aspernatur minus incidunt voluptas ratione! Ea cumque minus quam, temporibus voluptatum molestiae reiciendis mollitia sint eligendi delectus placeat nostrum.</p>
                    <ul className="footerLinksListCont">
                        <li><a href="https://www.youtube.com/watch?v=OuixdRCdCaI" target="_blank" rel="noreferrer">Enlace 1 <span className="footerLinksDesc">youtube.com</span></a></li>
                        <li><a href="https://www.youtube.com/watch?v=_X7fD5L36gs" target="_blank" rel="noreferrer">Enlace 2 <span className="footerLinksDesc">youtube.com</span></a></li>
                        <li><a href="https://www.youtube.com/watch?v=lDsVByHQqZw" target="_blank" rel="noreferrer">Enlace 3 <span className="footerLinksDesc">youtube.com</span></a></li>
                        <li><a href="https://www.infobae.com/sociedad/policiales/2023/09/20/quien-es-quien-en-la-banda-de-ladrones-chilenos-que-robo-16-camionetas-frontier-en-la-ciudad-en-un-mes/" target="_blank" rel="noreferrer">Enlace 4 <span className="footerLinksDesc">infobae.com</span></a></li>
                        <li><a href="https://noticias.perfil.com/noticias/empresas-y-protagonistas/jessica-de-cillis-la-abogada-penalista-que-defiende-a-los-mas-vulnerables.phtml" target="_blank" rel="noreferrer">Enlace 5 <span className="footerLinksDesc">perfil.com</span></a></li>
                    </ul>
                </div>
                <div className="footerContactCont footerSection flex column">
                    <div className="flex">
                        <img src="/images/icons/contact.png" alt="Links" className="footerIconTitles"/>
                        <p className="footerTitles">Contacto Rápido</p>
                    </div>
                    <form className="footerForm flex column">
                        <input type="text" className="footerForm_email" placeholder="e-mail"/>     
                        <textarea className="footerForm_message" placeholder="Mensaje"/>
                        <button type="button" className="footerSendButton">Enviar</button>
                    </form>
                </div>
                <div className="footerClientsCont footerSection flex column">
                    <div className="flex">
                        <img src="/images/icons/clients.png" alt="Links" className="footerIconTitles"/>
                        <p className="footerTitles">Nuestros Clientes</p>
                    </div>    
                    <div className="footerClientsGrid">
                        <div><p>Cliente 1</p></div>
                        <div><p>Cliente 2</p></div>
                        <div><p>Cliente 3</p></div>
                        <div><p>Cliente 4</p></div>
                        <div><p>Cliente 5</p></div>
                        <div><p>Cliente 6</p></div>
                        <div><p>Cliente 7</p></div>
                        <div><p>Cliente 8</p></div>
                        <div><p>Cliente 9</p></div>
                    </div>  
                </div>
            </div>
            <div className="footerCopyRightCont flex">
                <p className="footer_small_text">Jessica De Cillis Estudio de Abogados © 2024 All rights reserved</p>
            </div>
        </div>
    );
}