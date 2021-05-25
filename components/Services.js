import ServicesItem from "./ServicesItem";

function Services({servicesData}) {
    return (
        <div className="flex flex-col items-center">
            <h1 className="mt-12 border-b text-3xl p-3 text-gray-700">Gestes Chirurgicaux</h1>
            <div className="grid grid-cols-1 gap-3 md:gap-6 md:grid-cols-3 lg:grid-cols-4 m-6 p-6 justify-center text-center border rounded-lg shadow-sm">
                {servicesData.map( service => <ServicesItem title={service.title} description={service.description} />)}
            
            </div>
        </div>
    )
}

export default Services
