import "./cvPage.css";
import Cv from "../../components/cv/Cv";
import { useParams } from "react-router-dom";

export default function CvPage () {
    
    const {name} = useParams <string> ();

    const team : {[key: string]: any} = {
        jessica: {
            name: "Jessica",
            lastname: "De Cillis",
            position: "Abogada penalista",
            speciality: "Especialista en derecho penal",
            text: 
            <>
                <p>Dra. Jessica De Cillis: es egresada de Bachiller con orientación en Ciencias Sociales del Liceo Nacional de Señoritas Nº 8, Esteban Echeverria, de CABA. </p>
                <p>Es Abogada egresada de la Facultad de Derecho y Ciencias Sociales – UBA. </p>
                <p>Tiene una Diplomatura en Derecho Penitenciario (CPACF-UB), dictado por la Escuela de Posgrado del Colegio Público de Abogados de CABA y la Universidad de Belgrano (2020). </p>
                <p>Cursando el Posgrado en la especialidad de Derecho Penal en la Facultad de Derecho de la Universidad de Buenos Aires. </p>
                <p>Es Docente Ayudante Ad Honorem de la Materia Práctica Profesional en la Orientación Penal, Comisión 1100 del Centro de Formación Profesional, de la Facultad de Derecho de la UBA, desde febrero de 2017 a la actualidad. (nombrada en el año 2018). </p>
                <p>Recientemente conformó el grupo de docentes que dictó el Seminario online “El Proceso Penal en la Provincia de Buenos Aires”, organizado por el Centro de Graduados, de la Facultad de Derecho de la UBA los días 30 de octubre, 6, 13 y 20 de noviembre de 2020, cuyo contenido puede accederse desde el canal de YouTube. </p>
                <p>Brindó charlas a diferentes y variados grupos académicos sobre el Juicio por Jurados en la Argentina, sobre la Suspensión del Juicio a Prueba, sobre Medios de Coerción, Ley de Flagrancia, sobre el Debate Oral en Nación, entre las más relevantes. </p>
                <p>Trabaja como abogada independiente desde que egresó de la Facultad de Derecho, matriculada en CABA, provincia de Buenos Aires y en el Fuero Federal, actuando en causas de impacto público como IRON MOUNTAIN, Marco Stell y Tondini, entre otras. </p>
                <p>Posee amplia experiencia en debates orales y públicos. </p>
            </>
        }
    };
    
    return (
        <Cv name={team[name!].name} lastname={team[name!].lastname} position={team[name!].position} speciality={team[name!].speciality} text={team[name!].text}/>
    );
}
