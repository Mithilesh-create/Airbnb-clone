import { PlusIcon, MinusIcon } from "@heroicons/react/outline";
import { useState } from "react";
function ShowGuests() {
    const ValueRow = (props) => {
        return <>
            <div className={`grid grid-cols-3 ${!props.last && 'border-b-2'} border-gray-700 select-none py-2 w-4/5`}>
                <div className="flex flex-col col-span-2">
                    <span className="text-xl font-semibold">{props.heading}
                    </span>
                    <span className={`text-lg text-gray-500 ${props.last && "underline"}`}>{props.des}
                    </span>
                </div>
                <div className="flex items-center justify-evenly">
                    <div className="
                    w-10 h-10 flex justify-center items-center rounded-full cursor-pointer bg-white shadow-md"
                    >
                        <MinusIcon width={24} height={24} />
                    </div>
                    <span className="text-2xl">0</span>
                    <div className=" 
                    w-10 h-10 flex justify-center items-center rounded-full cursor-pointer 
                    bg-white shadow-md">
                        <PlusIcon className="cursor-pointer bg-white rounded-full" width={24} height={24} />
                    </div>
                </div>
            </div>
        </>
    }
    return (
        <div className="absolute z-10 w-1/2 h-96 bg-white rounded-3xl top-24 right-0 flex flex-col justify-center items-center">
            <ValueRow des="Ages 13 or above" heading="Adults" />

            <ValueRow des="Ages 2-12" heading="Children" />

            <ValueRow des="Under 2" heading="Infants" />

            <ValueRow des="Bringing an assistance animal?" heading="Pets" last />
        </div>
    )
}

export default ShowGuests
