import "./homeConcerns.css";
import HomeConcernsCard from "../homeConcernsCard/HomeConcernsCard";
import { useState, useRef, useEffect } from "react";

export default function HomeConcerns() {

    const enter = useRef (true)
    const addClasses = useRef (false);
    const directionRef = useRef ("");
    
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

    const [cards, setCards] = useState <JSX.Element[]> (cardsInfo.current.map((card) => <HomeConcernsCard imgPath={card.imgPath} mainText={card.mainText} secondaryText={card.secondaryText} key={card.mainText}/>));
  
    const handleMove = (direction: string) => {
        if (enter.current) {
            enter.current = false;

            const homeConcernsCards_cont: HTMLDivElement | null = document.querySelector(".homeConcernsCards_cont");
            directionRef.current = direction;
            
            if (direction === "left") homeConcernsCards_cont!.style.justifyContent = "flex-start";
            if (direction === "right") homeConcernsCards_cont!.style.justifyContent = "flex-end";
            
            if (direction === "left") cardsInfo.current.push(cardsInfo.current[0]);
            if (direction === "right") cardsInfo.current.unshift(cardsInfo.current[cardsInfo.current.length - 1]);

            const cardsAux = cardsInfo.current.map((card) => <HomeConcernsCard imgPath={card.imgPath} mainText={card.mainText} secondaryText={card.secondaryText} key={card.mainText}/>);
            addClasses.current = true;
            setCards(cardsAux);
                                    
            if (direction === "left") homeConcernsCards_cont?.classList.add("moveToLeft");
            if (direction === "right") homeConcernsCards_cont?.classList.add("moveToRight");

            const cardsAnimation = homeConcernsCards_cont?.getAnimations();
            const animation: Animation = cardsAnimation![0];
            
            const removeElement = () => {
                const homeConcernsCards_cont: HTMLDivElement | null = document.querySelector(".homeConcernsCards_cont");
                if (direction === "left") cardsInfo.current.shift();
                if (direction === "right") cardsInfo.current.pop();
                const cardsAux = cardsInfo.current.map((card) => <HomeConcernsCard imgPath={card.imgPath} mainText={card.mainText} secondaryText={card.secondaryText} key={card.mainText}/>);
                addClasses.current = false;
                setCards(cardsAux);

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
        if (addClasses.current) {
            const homeConcernsCards_cont = document.querySelector(".homeConcernsCards_cont");
            const cardsList = homeConcernsCards_cont?.childNodes as NodeListOf<HTMLDivElement>;
           
            if (directionRef.current === "left") cardsList[0].classList.add("opacityOff");
            if (directionRef.current === "left") cardsList[cardsList.length - 1].classList.add("opacityOn");
            if (directionRef.current === "right") cardsList[cardsList.length -1].classList.add("opacityOff");
            if (directionRef.current === "right") cardsList[0].classList.add("opacityOn");
        }
    }, [cards])
    
      
    return (
        <div className="homeConcernsCont flex column">
            <img src="/images/concerns/bg.jpg" alt="Background" className="homeConcernsCont_bg"/>
            <h2 className="homeConcernsCont_title"> <span className="homeConcernsCont_title_color">Lorem ipsum dolor sit,</span> amet consectetur adipisicing elit.</h2>
            <h3 className="homeConcernsCont_subtitle">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</h3>
            <div className="homeConcernsCards_cont flex">
                {cards}
            </div>
            <div className="homeConcernsCont_controls_cont flex">
                <div className="homeConcernsCont_control" onClick={() => handleMove("right")}>{"<"}</div>
                <div className="homeConcernsCont_control" onClick={() => handleMove("left")}>{">"}</div>
            </div>
        </div>
    )
}
