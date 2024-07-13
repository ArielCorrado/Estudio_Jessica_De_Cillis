import "./areas.css";

export default function Areas () {
    return (
        <div className="aboutCont areasCont paddingSeccions seccionToWaitImages flex column">
            <img src="/images/areas/bg.jpg" alt="Areas" className="areas_bgImg"/>
            <div className="areasInternal_cont flex column">
                <h2 className="homeConcernsCont_title areas_title"> <span className="homeConcernsCont_title_color">Además de la amplia especialidad brindada en Derecho Penal,</span> nuestro equipo profesional está capacitado para asesorar también en áreas del</h2>
                <ul className="areasList_cont flex column">
                    <li>Derecho Civil</li>
                    <li>Derecho Laboral</li>
                    <li>Derecho Sucesorio</li>
                    <li>Accidentes de Tránsito</li>
                </ul>
                <p>Realiza tu consulta y presupuesto.</p>
                <p>Atención personalizada, absoluta discreción.</p>  
            </div>
        </div>
    );
}
