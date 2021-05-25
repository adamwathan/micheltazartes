import About from "../components/About";
import CustomHead from "../components/CustomHead";
import Nav from "../components/Navbar";


function about() {
    return (
        <div>
            <CustomHead title="Docteur Michel Tazartes" description="Description du parcours du Docteur Michel Tazartes"/>
            <Nav />
            <About />
        </div>
    )
}

export default about
