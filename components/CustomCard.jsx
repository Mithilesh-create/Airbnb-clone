function CustomCard(props) {
    return (
        <div className="flex px-4 w-full h-full text-white hover:transform transition duration-500 hover:scale-110 items-center justify-center"  >
            <div className={`${props.className} h-5/6 w-96 rounded-3xl shadow-md cursor-pointer overflow-y-hidden`} onClick={props.onClick}>
                <div className={`${props.bgimage} bg-cover bg-center bg-no-repeat w-full h-1/2 rounded-t-3xl`}></div>
                <div className="w-full h-1/2 flex flex-col p-4">
                    <span className="font-semibold">{props.destination}</span>
                    <span>{props.distance}</span>
                </div>
            </div>
        </div>
    )
}

export default CustomCard
