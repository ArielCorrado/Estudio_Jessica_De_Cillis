import "./cv.css";

export default function Cv (props: {name: string, lastname: string, position: string, speciality: string, text: JSX.Element, imgsrc: string}) {
    return (
        <div className="cvCont seccionToWaitImages flex">
            <div className="cvSheetCont">
                <img src={props.imgsrc} alt="Jessica de Cillis" className="cvSheetImg"/>
                <div className="cvSheetMainTexts flex column">
                    <h2 className="cvSheetName"> {props.name} <br /> {props.lastname} </h2>
                    <p className="cvSheetTitle flex"> {props.position} </p>
                    <p className="cvSheetSubTitle"> {props.speciality} </p>
                </div>
                <div className="cvSheetTextCont">
                    {props.text}
                </div>
            </div>
        </div>
    );
}
