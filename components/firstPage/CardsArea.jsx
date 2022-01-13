import CustomCard from "../CustomCard"
import DynamicHeroIcon from "../dynamicIcons/DynamicHeroIcon";
function CardsArea() {
    return (
        <div className="h-screen w-full  flex flex-col items-center justify-between">
            <div className="h-4/5 w-full">
                <div className="px-4 h-32 w-full flex items-center justify-between">
                    <span className="text-2xl">Inspiration for your
                        <br />
                        next trip
                    </span>
                    <div className="flex justify-between w-24">
                        <div className="h-full p-2 rounded-full border-2 text-gray-400 cursor-pointer">
                            <DynamicHeroIcon icon="ChevronLeftIcon" width={15} height={15} />
                        </div>
                        <div className="h-full p-2 rounded-full border-2 border-gray-700 text-gray-700 cursor-pointer">
                            <DynamicHeroIcon icon="ChevronRightIcon" width={15} height={15} />
                        </div>
                    </div>
                </div>
                <div className="h-4/5 w-full flex overflow-x-scroll no-scrollbar" >
                    <CustomCard className="bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500" bgimage="bg-imageOne" destination="Lonavala" distance="66 Kilometers away" />
                    <CustomCard className="bg-gradient-to-tl from-green-300 via-blue-500 to-purple-600" bgimage="bg-imageTwo" destination="Karjat" distance="53 Kilometers away" />
                    <CustomCard className="bg-gradient-to-tl from-green-200 via-green-400 to-purple-700" bgimage="bg-imageThree" destination="Calangute" distance="396 Kilometers away" />
                    <CustomCard className="bg-gradient-to-tl from-blue-500 to-green-400" bgimage="bg-imageFour" destination="Mahabaleshwar" distance="145 Kilometers away" />
                </div>
            </div>

            <div className="px-4 h-1/6 w-full flex items-center justify-between">
                <span className="text-2xl">Discover Airbnb
                    <br />
                    Experiences
                </span>
            </div>

        </div>
    )
}

export default CardsArea
