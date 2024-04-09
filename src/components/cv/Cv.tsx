import "./cv.css";

export default function Cv (props: {name: string, lastname: string, position: string, speciality: string, text: JSX.Element, imgsrc: string, imgClass?: string}) {
    return (
        <div className="cvCont seccionToWaitImages flex">
            <div className="cvSheetCont">
                <div className="cvHeadLandsCape">
                    <img src={props.imgsrc} alt={props.name} className={`cvSheetImg ${props.imgClass || ""}`} />
                    <div className="cvSheetMainTexts flex column">
                        <h2 className="cvSheetName"> {props.name} <br /> {props.lastname} </h2>
                        <p className="cvSheetTitle flex"> {props.position} </p>
                        <p className="cvSheetSubTitle"> {props.speciality} </p>
                    </div>
                </div>
                <div className="cvHeadCont flex">
                    <img src={props.imgsrc} alt={props.name} className={`cvSheetImg cvSheetImgPortrait ${props.imgClass || ""}`} />
                    <div className="cvSheetMainTexts flex column">
                        <h2 className="cvSheetName"> {props.name} <br /> {props.lastname} </h2>
                        <p className="cvSheetTitle flex"> {props.position} </p>
                        <p className="cvSheetSubTitle"> {props.speciality} </p>
                    </div>
                </div>
                <div className="cvSheetTextCont">
                    {props.text}
                </div>
            </div>
        </div>
    );
}
