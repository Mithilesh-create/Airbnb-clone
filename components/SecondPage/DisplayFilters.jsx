import { AdjustmentsIcon } from "@heroicons/react/outline"

function DisplayFilters(props) {
    return (
        <span className="border text-sm cursor-pointer rounded-full h-12  items-center justify-center md:text-md font-semibold p-4 m-2 flex text-center">
            {props.filter
                &&
                <AdjustmentsIcon width={20} height={20} className="rotate-90" />
            }
            {props.name}
        </span>
    )
}

export default DisplayFilters
