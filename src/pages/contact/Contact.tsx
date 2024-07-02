import "./contact.css";
import { useRef, useContext } from "react";
import "./contact.css";
import { SpinnerContext } from "../../context/spinnerContext";
import { swalPopUp } from "../../utils/swal";

type formValues = {
    name: string;
    lastname: string;
    email: string;
    phone: string;
    message: string;
}

const Contact = () => {

    const {showSpinner} = useContext(SpinnerContext);
    const formRef = useRef <HTMLFormElement | null> (null);
            
    const validateForm = async () => {
                            
        const formData = new FormData(formRef.current as HTMLFormElement);
        const dataOBJ = Object.fromEntries(formData) as formValues;

        if (dataOBJ.name.trim() !== "" && dataOBJ.email.trim() !== "" && dataOBJ.phone.trim() !== "" && dataOBJ.message.trim() !== "") {
            sendForm(dataOBJ);
        } else {
            swalPopUp("Ops!", "Falta Ingresar Algún Dato", "warning");
        }
    };   

    const sendForm = async (dataOBJ: object) => {
   
        try {
            showSpinner(true);
            const respJSON = await fetch ("/sendmail.php", {
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
          
    return (
        <div className="contactCont seccionToWaitImages flex">
            <div className='seccionContact OoSwF flex column'>
                <div className="telEmailCont flex wrap">
                    <div className='tel-contacto flex'>
                        <a href="https://wa.me/+5491140869828" target='_blank' rel="noreferrer" className='flex'>
                            <img src="/images/icons/ws2.png" alt="phone" className='imgContactoPhone iconsContactFilter' />
                            <h2>+54 9 11 40869828</h2>
                        </a>
                    </div>
                    <div className='email-contacto flex'>
                        <a href="mailto:info@abogadospenalistasar.com.ar" className='flex'>
                            <img src="/images/icons/email2.png" alt="email" className='imgContactoEmail iconsContactFilter' />
                            <h2>info@abogadospenalistasar.com.ar</h2>
                        </a>
                    </div>
                </div>
                <div className='contFormContacto flex column'>
                    <form action="" className='form' ref={formRef}>
                        <div className='contTituloContacto flex'>
                            <h2 className='titles tituloContacto'>ENVIANOS TU CONSULTA</h2>
                        </div>
                        <input type="text" name="name" className='formNom OoS inputForm' placeholder='NOMBRE' />
                        <input type="text" name="lastname" className='formApellido OoS inputForm' placeholder='APELLIDO (OPCIONAL)' />
                        <input type="tel" name="phone" className='formTel OoS inputForm' placeholder='TELÉFONO' />
                        <input type="email" name="email" className='formEmail OoS inputForm' placeholder='E-MAIL' />
                        <textarea name="message" className='formMsj OoS inputForm' placeholder='MENSAJE' rows={20} cols={45} />
                    </form>
                    <div className='contBotonContacto flex'><button type="button" className='sliderButton boton-contacto' onClick={validateForm}> Enviar </button></div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
