import "./homeConcerns.css";
import HomeConcernsCard from "../homeConcernsCard/HomeConcernsCard";
import { useState, useRef } from "react";

type CardsInfo = {
    imgPath: string,
    mainText: string,
    secondaryText: string,
}[]

export default function HomeConcerns() {
    
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
  
    const next = () => {
        cardsInfo.current.push(cardsInfo.current[0]);
        const cardsAux = cardsInfo.current.map((card) => <HomeConcernsCard imgPath={card.imgPath} mainText={card.mainText} secondaryText={card.secondaryText} key={card.mainText}/>);
        setCards(cardsAux);
                      
        const homeConcernsCards_cont = document.querySelector(".homeConcernsCards_cont");
        homeConcernsCards_cont?.classList.add("moveToLeft");

        const cardsAnimation = homeConcernsCards_cont?.getAnimations();
        const animation: Animation = cardsAnimation![0];
        
        const removeElement = () => {
            cardsInfo.current.shift();
            const cardsAux = cardsInfo.current.map((card) => <HomeConcernsCard imgPath={card.imgPath} mainText={card.mainText} secondaryText={card.secondaryText} key={card.mainText}/>);
            setCards(cardsAux);
            // setCards((prevState) => {
            //     const newState = [...prevState];    
            //     newState.shift();
            //     return newState;
            // });

            homeConcernsCards_cont?.classList.remove("moveToLeft");
            animation.removeEventListener("finish", removeElement);
        }
        
        animation.addEventListener("finish", removeElement);
    }
      
    return (
        <div className="homeConcernsCont flex column">
            <img src="/images/concerns/bg.jpg" alt="Background" className="homeConcernsCont_bg"/>
            <h2 className="homeConcernsCont_title"> <span className="homeConcernsCont_title_color">Lorem ipsum dolor sit,</span> amet consectetur adipisicing elit.</h2>
            <h3 className="homeConcernsCont_subtitle">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</h3>
            <div className="homeConcernsCards_cont flex">
                {cards}
            </div>
            <div className="homeConcernsCont_controls_cont flex">
                <div className="homeConcernsCont_control">{"<"}</div>
                <div className="homeConcernsCont_control" onClick={next}>{">"}</div>
            </div>
        </div>
    )
}
