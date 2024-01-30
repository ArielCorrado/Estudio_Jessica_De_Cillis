import "./homeConcerns.css";
import HomeConcernsCard from "../homeConcernsCard/HomeConcernsCard";
import { useRef, useEffect } from "react";

export default function HomeConcerns() {

    const enter = useRef (true)
    const addClasses = useRef (false);
    const intervalIdRef = useRef <NodeJS.Timer | undefined> (undefined);
    
    const cardsInfo = useRef([
        {
            imgPath: "/images/concerns/1.jpg",
            mainText: "Violencia de género",
            secondaryText: "violencia de género"
        },
        {
            imgPath: "/images/concerns/2.jpg",
            mainText: "Excarcelaciones",
            secondaryText: "excarcelaciones"
        },
        {
            imgPath: "/images/concerns/3.jpg",
            mainText: "Robos",
            secondaryText: "robos"
        },
    ]);
  
    const handleMove = (direction: string, manual: boolean) => {
        if (manual) clearInterval(intervalIdRef.current);
        if (enter.current) {
            enter.current = false;

            const homeConcernsCards_cont: HTMLDivElement | null = document.querySelector(".homeConcernsCards_cont");
                     
            if (direction === "left") homeConcernsCards_cont!.style.justifyContent = "flex-start";
            if (direction === "right") homeConcernsCards_cont!.style.justifyContent = "flex-end";
            
            if (direction === "left") homeConcernsCards_cont?.appendChild(homeConcernsCards_cont.childNodes[0].cloneNode(true));
            if (direction === "right") homeConcernsCards_cont?.insertBefore(homeConcernsCards_cont.childNodes[homeConcernsCards_cont.childNodes.length -1].cloneNode(true), homeConcernsCards_cont.firstChild);
                                    
            if (direction === "left") homeConcernsCards_cont?.classList.add("moveToLeft");
            if (direction === "right") homeConcernsCards_cont?.classList.add("moveToRight");

            const cardsAnimation = homeConcernsCards_cont?.getAnimations();
            const animation: Animation = cardsAnimation![0];

            const homeConcernsCards_contArr = Array.from(homeConcernsCards_cont!.childNodes) as HTMLDivElement[]
            
            if (direction === "left") homeConcernsCards_contArr[0].classList.add("opacityOff");
            if (direction === "left") homeConcernsCards_contArr[homeConcernsCards_contArr.length - 1].classList.add("opacityOn");
            if (direction === "right") homeConcernsCards_contArr[homeConcernsCards_contArr.length - 1].classList.add("opacityOff");
            if (direction === "right") homeConcernsCards_contArr[0].classList.add("opacityOn");
            
            const removeElement = () => {
                const homeConcernsCards_cont: HTMLDivElement | null = document.querySelector(".homeConcernsCards_cont");
               
                addClasses.current = false;
           
                if (direction === "left") homeConcernsCards_cont?.childNodes[0].remove();
                if (direction === "right") homeConcernsCards_cont?.childNodes[homeConcernsCards_cont?.childNodes.length - 1].remove();

                homeConcernsCards_cont?.classList.remove("moveToLeft");
                homeConcernsCards_cont?.classList.remove("moveToRight");
                animation.removeEventListener("finish", removeElement);
                const cardsList = homeConcernsCards_cont?.childNodes as NodeListOf<HTMLDivElement>;

                if (direction === "left") cardsList[0].classList.remove("opacityOff");
                if (direction === "left") cardsList[cardsList.length - 1].classList.remove("opacityOn")

                if (direction === "right") cardsList[cardsList.length - 1].classList.remove("opacityOn");
                if (direction === "right") cardsList[0].classList.remove("opacityOff")

                enter.current = true;
            }

            animation.addEventListener("finish", removeElement);
                               
        }
    }

    useEffect(() => {
        intervalIdRef.current = setInterval(() => {
            handleMove("right", false)
        },5000)
        
        /****************************** Eventos Touch ****************************/

        let startX: number;
        let endX: number;
        const elemento: HTMLElement | null = document.querySelector(".homeConcernsCards_cont");

        const start = (e: TouchEvent) => {
            startX = e.touches[0].clientX;
        }

        const end = (e: TouchEvent) => {
            endX = e.changedTouches[0].clientX;
            const Ax = endX - startX;
            if (Ax > 10) {
                handleMove("right", true);
            } else if (Ax < -10) {
                handleMove("left", true);
            }
        }

        elemento?.addEventListener("touchstart", start);
        elemento?.addEventListener("touchend", end);

        /**************************************************************************/

        return () => clearInterval(intervalIdRef.current);  

    }, [])
                 
    return (
        <div className="homeConcernsCont flex column">
            <img src="/images/concerns/bg.jpg" alt="Background" className="homeConcernsCont_bg"/>
            <h2 className="homeConcernsCont_title"> <span className="homeConcernsCont_title_color">Lorem ipsum dolor sit,</span> amet consectetur.</h2>
            <h3 className="homeConcernsCont_subtitle">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</h3>
            <div className="homeConcernsCards_cont flex">
                { cardsInfo.current.map((card) => <HomeConcernsCard imgPath={card.imgPath} mainText={card.mainText} secondaryText={card.secondaryText} key={card.mainText}/>) }
            </div>
            <div className="homeConcernsCont_controls_cont flex">
                <div className="homeConcernsCont_control" onClick={() => handleMove("right", true)}>{"<"}</div>
                <div className="homeConcernsCont_control" onClick={() => handleMove("left", true)}>{">"}</div>
            </div>
        </div>
    )
}
