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
            imgsrc: "/images/team/jessica.jpeg",
        },

        martin: {
            name: "Martín",
            lastname: "",
            position: "Abogado / Docente",
            speciality: "Especialista en derecho penal",
            text: 
            <>
                <p className="cvSheetText">Es abogado egresado de la Universidad de Buenos Aires en el año 2014. </p>
                <p className="cvSheetText">Desde el año 2016 se encuentra matriculado en el Colegio Público de la Abogacía de la Capital Federal, trabajando profesionalmente desde entonces. </p>
                <p className="cvSheetText">Asimismo, ha desempeñado actividad como docente de la asignatura “Derecho Romano” en la Universidad de Buenos Aíres durante los años 2016 y 2019. </p>
                <p className="cvSheetText">Actualmente, se desempeña como ayudante de “práctica profesional” penal en la Universidad de Buenos Aires. </p>
                Actualmente, se desempeña como ayudante de “práctica profesional” penal en la Universidad de Buenos Aires.
            </>,
            imgsrc: "/images/team/martin.png",
        },

        desiree: {
            name: "DESIRÉE",
            lastname: "YVONNE BEGHIN",
            position: "Abogada / Profesora",
            speciality: "Especialización en Derecho Penal, Laboral y Previsional.",
            text: 
            <>  
                <p className="cvSheetTextTitle cvSheetTextTitleFirstPortrait">EXPERIENCIA LABORAL</p>          

                <p className="cvSheetTextMains cvSheetTextMainsTop">2020- Presente</p>
                <p className="cvSheetTextMains">Abogada- Ejercicio independiente de la profesión</p>
                <p className="cvSheetText">Especialización en Derecho Penal, Laboral y Previsional.</p>

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

                <div className="cvSheetTextLine"></div>

                <p className="cvSheetTextTitle">Ha realizado varios cursos y talleres, entre ellos:</p>   

                <p className="cvSheetTextMains cvSheetTextMainsTop"></p>
                <p className="cvSheetTextMains">Dictados por la Universidad de Buenos Aires (UBA):</p>
                <p className="cvSheetText">“Derecho Procesal Penal” del Programa de Perfeccionamiento en el Ejercicio Profesional.</p>
                <p className="cvSheetText">“Aspectos prácticos de la suspensión de juicio a prueba en los códigos procesales de Nación, Provincia de Buenos Aires y CABA”.</p>
                <p className="cvSheetText">“La instrucción penal en la Provincia de Buenos Aires”.</p>
                <p className="cvSheetText">“Etapa intermedia del proceso penal en la Provincia de Buenos Aires”.</p>
                <p className="cvSheetText">“Teoría del caso y litigación en juicio oral”.</p>
                <p className="cvSheetText">“Delitos Informáticos: análisis en particular”.</p>
                <p className="cvSheetText">“Estrategias de litigación penal”.</p>
                <p className="cvSheetText">“Medidas de coerción y medidas alternativas en el proceso penal”.</p>
                <p className="cvSheetText">“Cuestiones actuales en legítima defensa”.</p>

                <p className="cvSheetTextMains cvSheetTextMainsTop"></p>
                <p className="cvSheetTextMains">Dictados por la Unión de Empleados de Justicia de la Nación (UEJN):</p>
                <p className="cvSheetText">“Derecho Procesal Penal” del Programa de Perfeccionamiento en el Ejercicio Profesional.</p>
                <p className="cvSheetText">“Aspectos prácticos de la suspensión de juicio a prueba en los códigos procesales de Nación, Provincia de Buenos Aires y CABA”.</p>
                <p className="cvSheetText">“La instrucción penal en la Provincia de Buenos Aires”.</p>
                         
            </>,
            imgsrc: "/images/team/desiree.png",
        },
        camila: {
            name: "CAMILA",
            lastname: "Saftih Brea",
            position: "Abogada",
            speciality: "Especialización en Derecho Penal.",
            imgClass: "opc",
            text: 
            <>  
                <p className="cvSheetTextTitle cvSheetTextTitleLong">
                    Es Abogada egresada de la Facultad de Derecho y Ciencias Sociales de la Universidad de Buenos Aires, con especialización en Derecho Penal. <br />
                    Ha realizado varios cursos y talleres, entre ellos:
                </p>          
       
                <p className="cvSheetTextMains cvSheetTextMainsTop"></p>
                <p className="cvSheetTextMains">Dictados por la Universidad de Buenos Aires (UBA):</p>
                <p className="cvSheetText">“Derecho Procesal Penal” del Programa de Perfeccionamiento en el Ejercicio Profesional.</p>
                <p className="cvSheetText">“Aspectos prácticos de la suspensión de juicio a prueba en los códigos procesales de Nación, Provincia de Buenos Aires y CABA”.</p>
                <p className="cvSheetText">“La instrucción penal en la Provincia de Buenos Aires”.</p>
                <p className="cvSheetText">“Etapa intermedia del proceso penal en la Provincia de Buenos Aires”.</p>
                <p className="cvSheetText">“Teoría del caso y litigación en juicio oral”.</p>
                <p className="cvSheetText">“Delitos Informáticos: análisis en particular”.</p>
                <p className="cvSheetText">“Estrategias de litigación penal”.</p>
                <p className="cvSheetText">“Medidas de coerción y medidas alternativas en el proceso penal”.</p>
                <p className="cvSheetText">“Cuestiones actuales en legítima defensa”.</p>

                <p className="cvSheetTextMains cvSheetTextMainsTop"></p>
                <p className="cvSheetTextMains">Dictados por la Unión de Empleados de Justicia de la Nación (UEJN):</p>
                <p className="cvSheetText">“Ley del Arrepentido”.</p>
                <p className="cvSheetText">“Cibercrimen”.</p>    

                <div className="cvSheetTextLine"></div>

                <p className="cvSheetText cvSheetTextBold">Ha trabajado en la Dirección de Asistencia Judicial en Delitos Complejos y Crimen Organizado del Poder Judicial de la Nación y actualmente ejerce como abogada independiente.</p>
                <p className="cvSheetText cvSheetTextBold">Se encuentra matriculada en CABA, Provincia de Buenos Aires y en el Fuero Federal, lo cual le permite asumir como abogada en causas federales de todo el país.</p>
                <p className="cvSheetText cvSheetTextBold">Posee amplia experiencia en debates orales y públicos.</p>
            </>,
            imgsrc: "/images/team/camila.png",
        }
    };
    
    return (
        <Cv name={team[name!].name} lastname={team[name!].lastname} position={team[name!].position} speciality={team[name!].speciality} text={team[name!].text} imgsrc={team[name!].imgsrc} imgClass={team[name!].imgClass}/>
    );
}
