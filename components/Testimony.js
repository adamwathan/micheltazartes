

function Testimony({testimony}) {
    return (
        <div className="flex flex-col items-center rounded-lg shadow-sm border p-5 mt-6 mx-3 space-y-6">
            {testimony.map( testimony => {
                return (
                    <div key={testimony.name} className="flex flex-col w-full md:w-3/4 justify-center border rounded-full p-6 bg-beige">
                        <p className="text-center text-gray-900 italic font-light text-xl md:text-2xl p-3">"{testimony.blurb}"</p>
                        <p className="text-right text-gray-900 text-opacity-50 p-3">{testimony.name}, {testimony.createdOn}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default Testimony
