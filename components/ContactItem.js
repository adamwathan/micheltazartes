function ContactItem({title, description, url, contactNumber, contactMail, color="white"}) {
    return (
        <div className={`flex justify-center rounded-lg border shadow-sm mt-6 mx-3 bg-${color}`}>
            <div className="flex flex-col p-6 space-y-6 text-center">
                <p className="border-b font-sans text-gray-700 pb-3 text-2xl md:text-3xl">{title}</p>
                <a href={url} target="_blank" rel="noopener noreferrer"><p className="text-xl font-light md:text-2xl hover:text-red-900 pb-3 border-b"> {description} </p></a>
                <p className="text-xl md:text-2xl font-light">{contactNumber} | {contactMail}</p>
            </div>
        </div>
    )
}

export default ContactItem
