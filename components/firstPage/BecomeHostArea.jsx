import CustomBtns from "../CustomBtns"
function BecomeHostArea() {
    return (
        <div className="h-screen w-full bg-host bg-center bg-cover bg-no-repeat border-t text-white">
            <div className="w-full h-3/4 flex flex-col items-center justify-end">
                <div className="flex flex-col items-center justify-center bg-red- w-full h-36 font-semibold text-3xl flex-nowrap">
                    <span>
                        Questions about hosting?
                    </span>
                    <span>
                        Ask a Superhost.
                    </span>
                </div>
                <CustomBtns Title="Learn More" className="text-black w-5/12 max-w-xs h-14 bg-white flex flex-col items-center justify-center rounded-2xl flex-shrink-0 " />
            </div>
        </div>
    )
}

export default BecomeHostArea
