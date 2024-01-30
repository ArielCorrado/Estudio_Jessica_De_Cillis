import "./homeConcernsCard.css";

export default function HomeConcernsCard (props: {imgPath: string, mainText: string, secondaryText: string}) {
    return (
        <div className="homeConcernsCard_cont">
            <img src={props.imgPath} alt="Concern" className="homeConcernsCard_img"/>
            <div className="homeConcernsCard_textCont flex column">
                <p className="homeConcernsCard_mainText">{props.mainText}</p>
                <p className="homeConcernsCard_secondaryText">{props.secondaryText}</p>
            </div>
        </div>
    )
}
