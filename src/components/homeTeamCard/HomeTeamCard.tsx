import "./homeTeamCard.css";

export default function HomeTeamCard (props: {imgPath: string, mainText: string, secondaryText: string, imgClass?: string, contClass?: string}) {
    return (
        <div className={`homeConcernsCard_cont homeTeamCard_cont ${props.contClass}`}>
            <img src={props.imgPath} alt="Concern" className={`homeConcernsCard_img ${props.imgClass}`}/>
            <div className="homeConcernsCard_textCont flex column">
                <p className="homeConcernsCard_mainText">{props.mainText}</p>
                <p className="homeConcernsCard_secondaryText">{props.secondaryText}</p>
                <p className="homeConcernsCard_mainText homeTeamCard_viewCVText flex"><span className="homeTeamCard_viewCVText_Span">VER CURRICULUM</span></p>
            </div>
        </div>
    );
}
