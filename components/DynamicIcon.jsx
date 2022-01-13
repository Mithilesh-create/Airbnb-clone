import DynamicHeroIcon from "./dynamicIcons/DynamicHeroIcon"
function DynamicIcon(props) {
    return (
        <div className={`flex flex-col
        items-center justify-evenly ${props.className}`}>
            <DynamicHeroIcon icon={props.name} width={props.width} height={props.height} />
            <span className="text-sm">{props.subHead}</span>
        </div>
    )
}

export default DynamicIcon
