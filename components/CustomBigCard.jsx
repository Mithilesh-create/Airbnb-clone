import CustomBtns from "./CustomBtns"

function CustomBigCard(props) {
    return (
        <div className={`h-full w-full text-white rounded-2xl ${props.bg} bg-center bg-cover bg-no-repeat shadow-lg lg:h-screen`}>
            <div className="flex flex-col justify-between p-10 h-1/3 md:h-2/5">
                <span className="text-5xl">Things to do
                    <br />
                    {props.where}
                </span>
                <CustomBtns Title={props.title} className="bg-white p-4 w-1/3 text-black flex items-center justify-center rounded-md lg:w-1/2" textclassName="whitespace-nowrap"/>
            </div>
        </div>
    )
}

export default CustomBigCard
