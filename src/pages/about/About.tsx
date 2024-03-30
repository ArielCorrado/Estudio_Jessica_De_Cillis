import "./about.css";
import HomeTeamCard from "../../components/homeTeamCard/HomeTeamCard";
import { Link } from "react-router-dom";

export default function About() {
    return (
        <div className="aboutCont paddingSeccions seccionToWaitImages flex column">
            
            <h2 className="homeConcernsCont_title"> <span className="homeConcernsCont_title_color">Lorem ipsum dolor sit,</span> amet consectetur.</h2>
            <h3 className="homeConcernsCont_subtitle">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</h3>
        
            <Link to="/cv/jessica">
                <HomeTeamCard 
                    imgPath="/images/team/jessica.jpeg" 
                    mainText="JESSICA DE CILLIS" 
                    secondaryText="Abogada Penalista" 
                    imgClass="homeTeamCardJessicaImgClass"
                    contClass="scale105"
                />  
            </Link>
            <div className="flex wrap">
                <Link to="/cv/desiree">
                    <HomeTeamCard 
                        imgPath="/images/team/desiree.png" 
                        mainText="DESIRÉE YVONNE BEGHIN" 
                        secondaryText="Abogada / Profesora" 
                        imgClass="homeTeamCardDesireeImgClass" 
                        contClass="homeTeamCard_ScaleDown scale89"
                    /> 
                </Link>   
                <Link to="/cv/martin">
                    <HomeTeamCard 
                        imgPath="/images/team/martin.png" 
                        mainText="MARTÍN" 
                        secondaryText="Abogado" 
                        imgClass="homeTeamCardMartinImgClass" 
                        contClass="homeTeamCard_ScaleDown scale89" 
                    />    
                </Link>
                <Link to="/cv/camila">
                    <HomeTeamCard 
                        imgPath="/images/team/camila.png" 
                        mainText="Camila Saftih Brea" 
                        secondaryText="Abogada" 
                        imgClass="homeTeamCardCamilaImgClass" 
                        contClass="homeTeamCard_ScaleDown scale89"
                    />  
                </Link>
            </div>
        </div>
    );
}
