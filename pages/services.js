import Nav from "../components/Navbar";
import Services from "../components/Services";
import {services} from "../utils/services-data";

function services() {
    return (
        <div>
            <Nav />
            <Services services={services}/>
        </div>
    )
}

export default services
