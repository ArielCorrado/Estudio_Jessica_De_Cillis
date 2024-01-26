import "./navBarAndInfo.css";
import NavBar from "../navBar/NavBar";
import { useEffect } from "react";

function NavBarAndInfo () {

    useEffect(() => {
        const adjustPaddingNavBar = () => {
            const logoNavBar = document.querySelector(".logoNavBar");
            const navBarInfo_Logo_Cont_LEFT = logoNavBar?.getBoundingClientRect().left;
            const contMenu = document.querySelector(".contMenu") as HTMLDivElement;
            contMenu.style.paddingLeft = navBarInfo_Logo_Cont_LEFT + "px";
        }
        adjustPaddingNavBar();
        window.addEventListener("resize", adjustPaddingNavBar);
        window.addEventListener("orientationchange", adjustPaddingNavBar);
        window.addEventListener("scroll", adjustPaddingNavBar);
        window.addEventListener("load", adjustPaddingNavBar);
    }, [])
    
    return (
        <div className="navBar_navBarInfo_Cont opacityOnCharge">
            <div className="navBarInfo_Cont flex">
                <div className="navBarInfo_Logo_Cont flex">
                    <img src="/images/logos/logo1.png" alt="Logo" className="logoNavBar logoAdjust"/>
                </div>
                <div className="navBarInfo_Info_Cont flex">
                    <div className="navBar_Info_Schedule_Cont flex column">
                        <div className="flex">
                            <img src="/images/icons/time.png" alt="Schedule" className="navBar_icons"/>
                            <p className="navBarInfo_Info_Large_Text">8 - 17hs</p>
                        </div>
                        <p className="navBarInfo_Info_Small_Text">Oficina</p>
                    </div>
                    <div className="navBar_Info_Contact_Cont flex column">
                        <div className="flex">
                            <img src="/images/icons/phone.png" alt="Contact" className="navBar_icons"/>
                            <p className="navBarInfo_Info_Large_Text">+54 9 11 40869828</p>
                        </div>
                        <p className="navBarInfo_Info_Small_Text">Urgencias 24hs</p>
                    </div>
                    <div className="navBar_Info_Networks_Cont flex">
                        <img src="/images/icons/instagram.png" alt="Instagram icon" className="navBar_icons icon_invert"/>
                        <img src="/images/icons/facebook.png" alt="Facebook icon" className="navBar_icons icon_invert"/>
                        <img src="/images/icons/linkedin.png" alt="Linkedin icon" className="navBar_icons icon_invert"/>
                        <img src="/images/icons/x.png" alt="X icon" className="navBar_icons icon_invert"/>
                    </div>
                </div>
            </div>
            <div className="navBar_Cont">
                <NavBar/>
            </div>
        </div>
    )
}

export default NavBarAndInfo