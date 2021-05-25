import ContactItem from "./ContactItem"

function Contact() {
    return (
        <>
        <ContactItem
        title="Consultation du Docteur Tazartes"
        description="Consultation privée : 142 Boulevard du Montparnasse, 75014 Paris"
        url= "https://www.google.fr/maps/place/Dr+Tazart%C3%A8s+Michel/@48.840675,2.3306513,17z/data=!3m1!4b1!4m5!3m4!1s0x47e671c611e20e31:0x745a7a1fb0ea9ece!8m2!3d48.8407178!4d2.3328755"
        contactNumber = "01 43 20 91 75"
        contactMail = "contact.tazartes@gmail.com"
        />

        <ContactItem
        title="International International Oculoplastic and Orbital Institute (IOOI)"
        description="Stages pratiques de chirurgie pour médecins et chirurgiens"
        url= "https://www.ioo-institute.com/"
        contactNumber = "+33 6 22 83 10 99"
        contactMail = "contact.tazartes@gmail.com"
        color="beige"
        />

        <ContactItem
        title="Consultation Hôpital Necker-Enfants Malades"
        description="Consultation du Docteur Tazartes à l'Hôpital Necker-Enfants Malades, 149 rue de Sèvres, 75015 Paris"
        url= "https://www.aphp.fr/offre-de-soin/medecin/4090321/061/17"
        contactNumber = "01 44 49 54 43"
        contactMail = "contact.tazartes@gmail.com"
        />





        </>
    )
}

export default Contact
