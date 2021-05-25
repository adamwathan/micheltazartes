

function SurgeryLocation({name, city, country, url}) {
    return (
        <div className="flex rounded-full flex-col bg-beige hover:bg-lightblue p-6 w-3/4 lg:w-auto">
            <a href={url}>
            <p className="text-center">{name}</p>
            <p className="text-center font-light">{city}, {country}</p>
            </a>
        </div>
    )
}

export default SurgeryLocation
