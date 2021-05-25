import Contact from "../components/Contact";
import CustomHead from "../components/CustomHead";
import Nav from "../components/Navbar";

function contact() {
    return (
        <div>
            <CustomHead title="Contact Docteur Tazartes" description="Comment contacter le docteur Michel Tazartes par téléphone ou mail"/>
            <Nav />
            <Contact />
        </div>
    )
}

export default contact
