import "./footer.css";
import { getREM } from "../../utils/utils";
import { useContext, useEffect, useRef } from "react";
import { SpinnerContext } from "../../context/spinnerContext";
import { FormSmalltValues } from "../../types/types";
import { swalPopUp } from "../../utils/swal";

export default function Footer () {
   
    const {showSpinner} = useContext(SpinnerContext);
    const formRef = useRef <HTMLFormElement | null> (null);
            
    const validateForm = async () => {
                            
        const formData = new FormData(formRef.current as HTMLFormElement);
        const dataOBJ = Object.fromEntries(formData) as FormSmalltValues;
     
        if (dataOBJ.email.trim() !== "" && dataOBJ.message.trim() !== "") {
            sendForm(dataOBJ);
        } else {
            swalPopUp("Ops!", "Falta Ingresar Algún Dato", "warning");
        }
    };   

    const sendForm = async (dataOBJ: object) => {
   
        try {
            showSpinner(true);
            const respJSON = await fetch ("/sendmail2.php", {
                method: "POST",
                body: JSON.stringify(dataOBJ),
                headers: {
                    "Content-Type": "application/json"
                }
            });

            const respOBJ = await respJSON.json();
            showSpinner(false);
            if (respOBJ.msg.includes("Error")) {
                swalPopUp("Ops!", `${respOBJ.msg}, Intente otra vez`, "error");
            } else {
                const inputs: NodeListOf<HTMLInputElement> = document.querySelectorAll(".inputForm");
                inputs.forEach((input) => input.value = "");
                // contactAds();           //Llamada a funcion de conversion de google ads
                swalPopUp("Enviado!", "Mensaje enviado con éxito, gracias por contactarnos!", "success");
            } 
            
        } catch (err: unknown) {
            showSpinner(false); 
            swalPopUp("Ops!", err instanceof Error ? `Error al enviar el mensaje: ${err.message}` : "Error al enviar el mensaje: problema desconocido", "error");
        }
        document.body.style.overflow = "initial";
    };

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
                    <img src="/images/logos/logo1.png" alt="Logo" className="logoFooter"/>
                    <div className="footerLogoAndNetworks_networksCont flex">
                        <a className="footerLogoAndNetworks_netWorkCont flex column" href="https://www.instagram.com/abogados.nacion/" target="_blank" rel="noreferrer">
                            <img src="/images/icons/instagram.png" alt="Instagram icon" className="footer_icon icon_invert"/>
                            <p className="footerNetworkText">Instagram</p>
                        </a>
                        <a className="footerLogoAndNetworks_netWorkCont flex column" href="https://www.linkedin.com/in/jessica-gabriela-de-cillis-97418330/" target="_blank" rel="noreferrer">
                            <img src="/images/icons/linkedin.png" alt="Linkedin icon" className="footer_icon icon_invert"/>
                            <p className="footerNetworkText">Linkedin</p>
                        </a>
                    </div>
                </div>
                <div className="footerLinksCont footerSection flex column">
                    <div className="flex">
                        <img src="/images/icons/links.png" alt="Links" className="footerIconTitles"/>
                        <p className="footerTitles">Enlaces relevantes</p>
                    </div>
                    <ul className="footerLinksListCont">
                        <li>
                            <a href="https://www.youtube.com/watch?v=OuixdRCdCaI" target="_blank" rel="noreferrer">Causa BANDA DE LAS FRONTIER</a>
                        </li>
                        <li>
                            <a href="https://www.youtube.com/watch?v=_X7fD5L36gs" target="_blank" rel="noreferrer">Causa BANDA DE LAS FRONTIER</a>
                        </li>
                        <li>
                            <a href="https://www.youtube.com/watch?v=lDsVByHQqZw" target="_blank" rel="noreferrer">Causa BANDA DE LAS FRONTIER</a>
                        </li>
                        <li>
                            <a href="https://www.infobae.com/sociedad/policiales/2023/09/20/quien-es-quien-en-la-banda-de-ladrones-chilenos-que-robo-16-camionetas-frontier-en-la-ciudad-en-un-mes/" target="_blank" rel="noreferrer">Causa BANDA DE LAS FRONTIER</a>
                        </li>
                        <li>
                            <a href="https://noticias.perfil.com/noticias/empresas-y-protagonistas/jessica-de-cillis-la-abogada-penalista-que-defiende-a-los-mas-vulnerables.phtml" target="_blank" rel="noreferrer">Revista noticias </a>
                        </li>
                        <li>
                            <a href="https://www.c5n.com/sociedad/video-el-cruce-el-bebe-reno-colegiales-y-la-abogada-su-vecina-n159095" target="_blank" rel="noreferrer">BEBE RENO DE COLEGIALES </a>
                        </li>
                        <li>
                            <a href="https://fmrockandpop.com/on-demand/el-presenta-el-caso-como-el-bebe-reno-de-colegiales-y-ella-lo-desmiente" target="_blank" rel="noreferrer">BEBE RENO DE COLEGIALES </a>
                        </li>
                    </ul>
                </div>
                <div className="footerContactCont footerSection flex column">
                    <div className="flex">
                        <img src="/images/icons/contact.png" alt="Links" className="footerIconTitles"/>
                        <p className="footerTitles">Contacto Rápido</p>
                    </div>
                    <form className="footerForm flex column" ref={formRef}>
                        <input type="text" className="footerForm_email" placeholder="e-mail" name="email"/>     
                        <textarea className="footerForm_message" placeholder="Mensaje" name="message"/>
                        <button type="button" className="footerSendButton" onClick={validateForm}>Enviar</button>
                    </form>
                </div>
                {/* <div className="footerClientsCont footerSection flex column">
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
                </div> */}
            </div>
            <div className="footerCopyRightCont flex">
                <p className="footer_small_text">Estudio Jurídico De Cillis y Asociados © 2024 All rights reserved</p>
            </div>
        </div>
    );
}