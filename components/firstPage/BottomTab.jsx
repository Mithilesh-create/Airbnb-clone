import DynamicIcon from "../DynamicIcon";
function BottomTab() {
    return (
        <div className="bg-white text-gray-400 w-full h-20 fixed z-10 bottom-0 flex items-center justify-center lg:hidden">
            <div className
                ="w-8/12 h-full flex items-center justify-evenly">
                <DynamicIcon name="SearchIcon" className="cursor-pointer" width="35" height="35" subHead="Explore" />
                <DynamicIcon className="cursor-pointer " name="HeartIcon" width="35" height="35" subHead="Wishlists" />
                <DynamicIcon name="UserCircleIcon"
                    className="cursor-pointer" width="35" height="35" subHead="Log in" />
            </div>

        </div>
    )
}

export default BottomTab