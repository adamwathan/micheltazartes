import Nav from "../components/Navbar";
import Services from "../components/Services";
import {servicesData} from "../utils/services-data";

function services() {
    return (
        <div>
            <Nav />
            <Services servicesData={servicesData}/>
        </div>
    )
}

export default services
