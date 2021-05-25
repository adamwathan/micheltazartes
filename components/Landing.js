import Image from "next/image";
import Link from "next/link";
import SurgeryLocation from "./SurgeryLocation"
const PARIS_ADDRESS = "https://www.google.fr/maps/place/142+Boulevard+du+Montparnasse,+75014+Paris/@48.840675,2.3306513,17z/data=!3m1!4b1!4m5!3m4!1s0x47e671c61066e1c1:0x7b98084e00c5214e!8m2!3d48.8406715!4d2.33284";

function Landing() {
    return (
        <div className="flex flex-col h-full">
            <div className="flex flex-col flex-grow sm:flex-row items-center rounded-lg border shadow-sm mt-6 mx-3 pb-32">
                <div className="flex flex-col text-xl font-light font-base sm:text-2xl md:text-2xl mt-6 p-12 md: py-0 md:px-12 md:mx-12 text-center items-center">
                    <p>Le docteur <span className="text-rose font-normal">Michel Tazartes</span> vous accueille en consultation dans <a className="hover:text-rose" href={PARIS_ADDRESS} target="_blank" rel="noopener noreferrer">son cabinet, 142 boulevard du Montparnasse</a>, dans le 14e arrondissement de Paris. </p>
                    <Link href="/contact">
                        <a className="bg-beige border font-light rounded-lg md:w-3/12 w-5/12 m-6 p-2 hover:bg-gray-100">Contact</a>
                    </Link>
                </div>
                <div className="md:px-12 md:mx-12 xl:flex-shrink-0">
                    <Image src="/doctor-pair.svg" height="500" width="800" />
                </div>
            </div>
            
            <div className="flex flex-col my-2 mx-3 rounded-lg border shadow-sm py-12">
                <p className="text-xl lg:text-2xl font-light text-center px-5 pb-12">Le docteur Tazartes opère également au seins de ces structures :</p>
                <div className="flex flex-col xl:flex-row text-xl items-center justify-between space-y-6 xl:space-y-0 p-6">
                    <SurgeryLocation name="Clinique Saint Jean de Dieu" city="Paris" country="France" url="http://www.clinique-stjeandedieu.com/" />
                    <SurgeryLocation name="Clinique Geoffroy Saint Hilaire" city="Paris" country="France" url="https://clinique-geoffroy-saint-hilaire-paris.ramsaygds.fr/" />
                    <SurgeryLocation name="Hôpital Necker-Enfants Malades" city="Paris" country="France" url="http://hopital-necker.aphp.fr/" />
                    <SurgeryLocation name="Hôpital des Quinze-Vingts" city="Paris" country="France" url="https://www.15-20.fr/" />
                    <SurgeryLocation name="Clinique Fernandez-Vega" city="Madrid" country="Espagne" url="https://fernandez-vega.com/en/contact/" />
                    <SurgeryLocation name="Clinique Saint Jean" city="Saint-Jean-de-Védas" country="France" url="https://www.clinique-saint-jean.fr/etablissement/clinique-saint-jean/" />
    
                </div>
            </div>
        </div>
    )
}

export default Landing
