import Image from "next/image";
import Link from "next/link";

function About() {
    return (
        <div className="flex flex-col items-center md:items-start md:flex-row rounded-lg border shadow-sm mt-6 mx-3 p-6 space-x-12 space-y-12 md:space-y-0">
            <div className="">
                <Image className="rounded-lg" src="/images/tazartes-babelio.jpg" height="300" width="300"/>
            </div>
            <div className="flex flex-col space-y-9 max-w-5xl">
                <div>
                    <h1 className="text-xl md:text-3xl mb-6">En court</h1>
                    <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                </div>
                <div>
                    <h1 className="text-xl md:text-3xl mb-6">En long</h1>
                    <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                    <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                    <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>

                </div>
                
            </div>
            <div className="flex flex-row space-x-6 p-6 md:flex-col md:space-x-0 md:space-y-6">
                <div className="space-y-3">
                    <h1 className="text-xl md:text-3xl mb-3">Lieux d'exercice</h1>
                    <p>Paris</p>
                    <p>Montpellier</p>
                    <p>Madrid</p>
                </div>
                <div className="space-y-3">
                    <Link className="" href="/services">
                        <a><h1 className="text-xl hover:text-rose md:text-3xl mb-3">Gestes chirurgicaux</h1> </a>
                    </Link>
                    <p>Entropion</p>
                    <p>Ptosis</p>
                    <p>Blépharoplastie</p>
                </div>
                
                
            </div>
            
        </div>
    )
}

export default About
