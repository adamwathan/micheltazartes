import CustomHead from "../components/CustomHead";
import Nav from "../components/Navbar";
import Services from "../components/Services";
import {servicesData} from "../utils/services-data";

function services() {
    return (
        <div>
            <CustomHead title="Opérations chirurgicales du Docteur Michel Tazartes" description="Liste des interventions chirurgicales du docteur Michel Tazartes"/>
            <Nav />
            <Services servicesData={servicesData}/>
        </div>
    )
}

export default services
