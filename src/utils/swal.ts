import Swal, {SweetAlertOptions, SweetAlertIcon} from "sweetalert2";

const swalPopUp = (title: string, text: string, icon: SweetAlertIcon) => {

    const options : SweetAlertOptions = {               // Agregar la clase .swal2-icon-content {
        icon: icon,                                     // color: #ff5e15; } Sino los iconos de warning e info no se ven
        title: title,
        text: text,
        confirmButtonColor: "#3E5C76",
        iconColor: "#3E5C76",
        color: "#384153",
        scrollbarPadding: true,
        customClass: {
            confirmButton: "sweetConfirmBoton",
        },
    };

    const navBar = document.querySelector(".navBar_navBarInfo_Cont") as HTMLDivElement;         //Para que el navbar ocupe el ancho del viewsreen menos el ancho del scroll
    navBar.style.width = document.body.offsetWidth + "px";
           
    Swal.fire(options);
};

export {swalPopUp};