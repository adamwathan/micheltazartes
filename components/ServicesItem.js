function ServicesItem({title, description}) {
    return (
        <div className="flex flex-col space-y-2 border rounded-md p-5">
            <h1 className="text-xl"> {title} </h1>
            <p> {description} </p>
            
        </div>
    )
}

export default ServicesItem
