import "./about.css";
import HomeTeamCard from "../../components/homeTeamCard/HomeTeamCard";

export default function About() {
    return (
        <div className="aboutCont paddingSeccions seccionToWaitImages flex column">
            
            <h2 className="homeConcernsCont_title"> <span className="homeConcernsCont_title_color">Lorem ipsum dolor sit,</span> amet consectetur.</h2>
            <h3 className="homeConcernsCont_subtitle">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</h3>
        
            <HomeTeamCard 
                imgPath="/images/team/jessica.jpg" 
                mainText="JESSICA DE CILLIS" 
                secondaryText="Abogada Penalista" 
                imgClass="homeTeamCardJessicaImgClass"
                contClass="scale105"
            />  
            <div className="flex wrap">
                <HomeTeamCard 
                    imgPath="/images/team/desiree.png" 
                    mainText="DESIRÉE YVONNE BEGHIN" 
                    secondaryText="Abogada / Profesora" 
                    imgClass="homeTeamCardDesireeImgClass" 
                    contClass="homeTeamCard_ScaleDown scale89"
                />      
                <HomeTeamCard 
                    imgPath="/images/team/martin.png" 
                    mainText="MARTÍN" 
                    secondaryText="Abogado" 
                    imgClass="homeTeamCardMartinImgClass" 
                    contClass="homeTeamCard_ScaleDown scale89" 
                />    
                <HomeTeamCard 
                    imgPath="/images/team/camila.png" 
                    mainText="Camila Saftih Brea" 
                    secondaryText="Abogada" 
                    imgClass="homeTeamCardCamilaImgClass" 
                    contClass="homeTeamCard_ScaleDown scale89"
                />  
            </div>
        </div>
    );
}
