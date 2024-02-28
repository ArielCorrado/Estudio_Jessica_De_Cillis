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
                <p className="cvSheetText">Dra. Jessica De Cillis: es egresada de Bachiller con orientación en Ciencias Sociales del Liceo Nacional de Señoritas Nº 8, Esteban Echeverria, de CABA. </p>
                <p className="cvSheetText">Es Abogada egresada de la Facultad de Derecho y Ciencias Sociales – UBA. </p>
                <p className="cvSheetText">Tiene una Diplomatura en Derecho Penitenciario (CPACF-UB), dictado por la Escuela de Posgrado del Colegio Público de Abogados de CABA y la Universidad de Belgrano (2020). </p>
                <p className="cvSheetText">Cursando el Posgrado en la especialidad de Derecho Penal en la Facultad de Derecho de la Universidad de Buenos Aires. </p>
                <p className="cvSheetText">Es Docente Ayudante Ad Honorem de la Materia Práctica Profesional en la Orientación Penal, Comisión 1100 del Centro de Formación Profesional, de la Facultad de Derecho de la UBA, desde febrero de 2017 a la actualidad. (nombrada en el año 2018). </p>
                <p className="cvSheetText">Recientemente conformó el grupo de docentes que dictó el Seminario online “El Proceso Penal en la Provincia de Buenos Aires”, organizado por el Centro de Graduados, de la Facultad de Derecho de la UBA los días 30 de octubre, 6, 13 y 20 de noviembre de 2020, cuyo contenido puede accederse desde el canal de YouTube. </p>
                <p className="cvSheetText">Brindó charlas a diferentes y variados grupos académicos sobre el Juicio por Jurados en la Argentina, sobre la Suspensión del Juicio a Prueba, sobre Medios de Coerción, Ley de Flagrancia, sobre el Debate Oral en Nación, entre las más relevantes. </p>
                <p className="cvSheetText">Trabaja como abogada independiente desde que egresó de la Facultad de Derecho, matriculada en CABA, provincia de Buenos Aires y en el Fuero Federal, actuando en causas de impacto público como IRON MOUNTAIN, Marco Stell y Tondini, entre otras. </p>
                <p className="cvSheetText">Posee amplia experiencia en debates orales y públicos. </p>
            </>,
            imgsrc: "/images/team/jessica.jpg",
        },

        desiree: {
            name: "DESIRÉE",
            lastname: "YVONNE BEGHIN",
            position: "Abogada / Profesora",
            speciality: "Especialización en Derecho Penal, Laboral y Previsional.",
            text: 
            <>  
                <p className="cvSheetTextTitle">EXPERIENCIA LABORAL</p>          

                <p className="cvSheetTextMains cvSheetTextMainsTop">2020- Presente</p>
                <p className="cvSheetTextMains">Abogada- Ejercicio independiente de la profesión</p>
                <p className="cvSheetText">Especialización en Derecho Penal,Laboral y Previsional.</p>

                <p className="cvSheetTextMains cvSheetTextMainsTop">2019</p>
                <p className="cvSheetTextMains">Patrocinio Jurídico Gratuito U.B.A</p>
                <p className="cvSheetText">Centro de Formación Profesional, Palacio de Justicia (Talcahuano 550), sede tribunales.</p>

                <p className="cvSheetTextMains cvSheetTextMainsTop">2016- 2018</p>
                <p className="cvSheetTextMains">Paralegal- Sector Contencioso Administrativo</p>
                <p className="cvSheetText">
                    Estudio Beccar Varela (Tucumán 1, CABA)
                    Funciones: Asistencia legal, procuración de causas 
                    confección de escritos. Manejo de Lex Doctor.
                </p>
                
                <p className="cvSheetTextMains cvSheetTextMainsTop">2015- 2016</p>
                <p className="cvSheetTextMains">Administrativa</p>
                <p className="cvSheetText">
                    Torquato Tasso (Defensa 1575, CABA)
                    Funciones: Confección y análisis de bordereaux.
                    Pago a representantes de artistas y recepción de clientes.
                </p>

                <p className="cvSheetTextMains cvSheetTextMainsTop">2013- 2015</p>
                <p className="cvSheetTextMains">Asistente del área de legales- Pasantía U.B.A</p>
                <p className="cvSheetText">
                    Estudio Bougain Abogados (Av. Santa Fe 951, CABA)
                    Funciones: Gestión en el área legal y administración.
                    Manejo de conmutador y coordinación de reuniones.
                </p>

                <div className="cvSheetTextLine"></div>

                <p className="cvSheetTextTitle">EDUCACIÓN</p>   

                <p className="cvSheetTextMains cvSheetTextMainsTop">2023</p>
                <p className="cvSheetTextMains">Profesora, título de grado</p>
                <p className="cvSheetText">
                    Profesorado para la Enseñanza Media y Superior en
                    Ciencias Jurídicas, U.B.A.
                </p>

                <p className="cvSheetTextMains cvSheetTextMainsTop">2021-2023</p>
                <p className="cvSheetTextMains">Docente ayudante ad honorem</p>
                <p className="cvSheetText">
                    Práctica profesional a cargo del Dr. Claudio Néstor Acosta,
                    perteneciente al Centro de Formación Profesional, FDUBA.
                </p>
                
                <p className="cvSheetTextMains cvSheetTextMainsTop">2013-2019</p>
                <p className="cvSheetTextMains">Abogada, título de grado</p>
                <p className="cvSheetText">
                    Facultad de Derecho, U.B.A.
                </p>

                <p className="cvSheetTextMains cvSheetTextMainsTop">2007-2013</p>
                <p className="cvSheetTextMains">Bachiller con orientación en Comunicación Social</p>
                <p className="cvSheetText">
                    Instituto privado Santa Catalina de Alejandría.
                </p>
            
            </>,
            imgsrc: "/images/team/desiree.png",
        }
    };
    
    return (
        <Cv name={team[name!].name} lastname={team[name!].lastname} position={team[name!].position} speciality={team[name!].speciality} text={team[name!].text} imgsrc={team[name!].imgsrc}/>
    );
}
