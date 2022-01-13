import { SearchIcon, GlobeAltIcon, UserCircleIcon, MenuIcon, } from "@heroicons/react/outline";
import Image from "next/image";
import Airbnb from "../assets/AirBNB.svg"
import AirbnbWhite from "../assets/AirWhite.svg"
import { addDays } from 'date-fns';
import { useEffect, useState } from 'react';
import DateRangePicker from "react-date-range/dist/components/DateRangePicker";
import ShowGuests from "./ShowGuests";
import { useRouter } from "next/router";
function LargeHeader(props) {
    const router= useRouter();
    const { ValueGive } = props
    const [DateHere, setDateHere] = useState([
        {
            startDate: new Date(),
            endDate: addDays(new Date(), 7),
            key: 'selection',
        }
    ]);
    const [ShowDatePicker, setShowDatePicker] = useState(false)
    const [ShowSmallSearch, setSmallSearch] = useState(false)
    const [ShowGuestSearch, setGuestSearch] = useState(false)
    useEffect(() => {
        if (ValueGive) {
            setSmallSearch(false)
            setGuestSearch(false)
        }
    }, [ValueGive])


    return (
        <>
            <div className={`hidden sm:flex items-center justify-center h-2/6  ${props.onGotScrolled ? "h-28" : "h-2/6"} w-full font-sans ${!props.second && "fixed top-0"} sm:hidden lg:block ${props.onGotScrolled ? "bg-white" : "bg-black"} ${props.second && props.onGotScrolled && "hidden"}  ${props.second && !props.onGotScrolled && "h-72"}  ${props.onGotScrolled ? "border-b" : "border-0"}`}>
                <div className={`w-full h-full ${props.onGotScrolled ? "h-full" : "h-1/3"} grid grid-cols-2 xl:flex xl:items-center xl:justify-between md:flex  md:justify-between md:items-center`}>
                    <div className="flex sm:flex items-center xl:w-1/6 h-full  md:w-1/6">
                        {props.onGotScrolled ?
                            <Image className="" src={Airbnb}
                                width={120}
                                height={80}
                            /> :
                            <Image src={AirbnbWhite}
                                className=""
                                width={120}
                                height={80}
                            />

                        }
                    </div>

                    <div className="sm:hidden xl:flex xl:items-center h-full xl:w-2/4 md:flex md:w-1/2 md:items-center md:justify-center">
                        <div className={`w-full h-full ${props.onGotScrolled ? "text-black" : "text-white"} flex justify-center  align-center ${props.onGotScrolled && !ShowSmallSearch ? "hidden" : "block"}`}>
                            <div className={`w-full flex item-center justify-evenly text-xl xl:flex  " ${props.onGotScrolled && ShowSmallSearch ? "sm:flex" : "sm:hidden"}`}>
                                <div className="cursor-pointer flex flex-col items-center justify-center group">
                                    <span>
                                        Places to stay
                                    </span>
                                    <span className={`${props.onGotScrolled ? "bg-black" : "bg-white"}  w-6 h-px mt-2 group-hover:scale-x-150 transition ease-in-out delay-150`} />
                                </div>
                                <div className="cursor-pointer flex flex-col items-center justify-center group">
                                    <span>
                                        Experiences
                                    </span>
                                    <span className={`${props.onGotScrolled ? "bg-black" : "bg-white"} w-0 h-px mt-2 group-hover:w-2 group-hover:scale-x-150 transition ease-in-out delay-150`} />
                                </div>
                                <div className="cursor-pointer flex flex-col items-center justify-center group">
                                    <span>
                                        Online Experiences
                                    </span>
                                    <span className={`${props.onGotScrolled ? "bg-black" : "bg-white"} w-0 h-px mt-2 group-hover:w-2 group-hover:scale-x-150 transition ease-in-out delay-150`} />
                                </div>
                            </div>


                        </div>


                        <div className={`w-full h-4/5  border shadow-lg border-gray-300 rounded-full relative ${props.onGotScrolled && !ShowSmallSearch ? "block" : "hidden"} cursor-pointer`} onClick={() => { setSmallSearch(!ShowSmallSearch); setShowDatePicker(false) }}>
                            <div className="grid grid-cols-4 w-full h-full">
                            </div>
                            <div className="bg-red-500 w-14 rounded-full absolute top-4 right-3 h-14 hover:bg-red-600 cursor-pointer flex items-center justify-center text-white">
                                <SearchIcon width={30} height={30} onClick={()=>{
                                    router.push('/secondpage')
                                }} />
                            </div>
                        </div>
                    </div>
                    {/*  */}
                    <div className={`absolute z-10 top-full flex items-center justify-center w-full h-full bg-white ${props.onGotScrolled && ShowSmallSearch ? "block" : "hidden"}`}>
                        <div className="w-4/5 h-4/5 bg-white border shadow-lg border-gray-300 rounded-full relative">
                            <div className="grid grid-cols-4  w-full h-full">

                                <div className="bg-white hover:bg-gray-300 flex flex-col items-center justify-center relative  rounded-full cursor-pointer">

                                    <label htmlFor="search" className="w-3/4 text-lg font-bold
                             text-gray-600 after:content-[''] after:w-px after:h-1/2 after:absolute after:bottom-1/4 after:right-2 after:bg-gray-300">Location</label>
                                    <input type="text" placeholder="Where are you" id="search" className=" focus:outline-none bg-transparent h-1/2 w-3/4 text-xl border-0" autoComplete="off"/>

                                </div>

                                <div className="bg-white hover:bg-gray-300 rounded-full cursor-pointer relative flex items-center flex-col justify-evenly " onClick={() => { setShowDatePicker(!ShowDatePicker) }}>
                                    <span className="w-3/4 text-lg font-bold
                             text-gray-600 after:content-[''] after:w-px after:h-1/2 after:absolute after:bottom-1/4 after:right-2 after:bg-gray-300">Check in</span>
                                    <span className="h-1/2 w-3/4 text-xl border-0 text-gray-400">{ShowDatePicker ? "Add dates" : DateHere[0].startDate.toLocaleDateString()}</span>
                                </div>

                                {ShowDatePicker &&

                                    <div className="absolute z-30 xl:top-24 xl:left-24 top-24 lg:top-24  md:inset-0">
                                        <DateRangePicker
                                            onChange={item => setDateHere([item.selection])}
                                            showSelectionPreview={true}
                                            moveRangeOnFirstSelection={false}
                                            months={2}
                                            ranges={DateHere}
                                            direction="horizontal"
                                            minDate={new Date()}
                                        />
                                    </div>

                                }
                                <div className="bg-white hover:bg-gray-300 flex items-center flex-col justify-evenly  cursor-pointer rounded-full relative ">
                                    <span className="w-3/4 text-lg font-bold
                             text-gray-600 after:content-[''] after:w-px after:h-1/2 after:absolute after:bottom-1/4 after:right-2 after:bg-gray-300">Check out</span>
                                    <span className="h-1/2 w-3/4 text-xl border-0 text-gray-400">{ShowDatePicker ? "Add dates" : DateHere[0].endDate.toLocaleDateString()}</span>
                                </div>
                                <div className="bg-white hover:bg-gray-300 rounded-full cursor-pointer flex items-center flex-col justify-evenly " onClick={() => { setGuestSearch(!ShowGuestSearch) }}>
                                    <span className="w-3/4 text-xl font-bold
                             text-gray-600">Guests</span>
                                    <span className="h-1/2 w-3/4 text-lg border-0 text-gray-400">Add guests</span>
                                </div>
                            </div>
                            <div className="bg-red-500 w-14 rounded-full absolute top-4 right-4 h-14 hover:bg-red-600 cursor-pointer flex items-center justify-center text-white">
                                <SearchIcon width={30} height={30} onClick={()=>{
                                    router.push('/secondpage')
                                }} />
                            </div>
                        </div>
                    </div>
                    {/*  */}
                    <div className={`${props.onGotScrolled ? "text-black" : "text-white"} flex items-center justify-center xl:w-1/3 h-full md:w-5/12`}>
                        <div className="w-1/3 text-center text-xl h-full flex items-center justify-center xl:w-2/5">
                            <div className={`flex items-center justify-center rounded-full w-full h-3/4  ${props.onGotScrolled ? "hover:bg-gray-300" : "hover:bg-gray-600"} cursor-pointer`}>
                                Become a host
                            </div>
                        </div>
                        <div className="text-center w-1/5 h-full flex items-center justify-center">
                            <div className={`flex items-center justify-center rounded-full w-full h-3/4 ${props.onGotScrolled ? "hover:bg-gray-300" : "hover:bg-gray-600"} cursor-pointer`}>
                                <GlobeAltIcon width={35} height={35} />
                            </div>
                        </div>
                        <div className="w-1/3 h-full flex items-center justify-center">
                            <div className={` ${props.onGotScrolled ? "border-gray-300" : "border-gray-200"} border-4
               w-3/4 h-3/4 flex items-center justify-evenly rounded-full cursor-pointer`}>
                                <div>
                                    <MenuIcon width={30} height={30} />
                                </div>
                                <div className={` ${props.onGotScrolled ? "bg-gray-300" : "bg-gray-200"} ${props.onGotScrolled ? "text-gray-400" : "text-gray-500"} rounded-full  `}>
                                    <UserCircleIcon width={45} height={45} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={`w-full h-1/6 xl:hidden ${props.onGotScrolled ? "text-black" : "text-white"} ${props.onGotScrolled ? "hidden" : "flex"} flex justify-center align-center`}>
                    <div className="w-3/5 flex item-center justify-between 
           ">
                        <div className="text-2xl cursor-pointer flex flex-col items-center justify-center group">
                            <span>
                                Places to stay
                            </span>
                            <span className={`${props.onGotScrolled ? "bg-black" : "bg-white"}  w-6 h-px mt-2 group-hover:scale-x-150 transition ease-in-out delay-150`} />
                        </div>
                        <div className="text-2xl cursor-pointer flex flex-col items-center justify-center group">
                            <span>
                                Experiences
                            </span>
                            <span className={`${props.onGotScrolled ? "bg-black" : "bg-white"} w-0 h-px mt-2 group-hover:w-2 group-hover:scale-x-150 transition ease-in-out delay-150`} />
                        </div>
                        <div className="text-2xl cursor-pointer flex flex-col items-center justify-center group">
                            <span>
                                Online Experiences
                            </span>
                            <span className={`${props.onGotScrolled ? "bg-black" : "bg-white"} w-0 h-px mt-2 group-hover:w-2 group-hover:scale-x-150 transition ease-in-out delay-150`} />
                        </div>
                    </div>
                </div>

                <div className={`w-full h-3/6 items-center justify-center  ${props.onGotScrolled ? "hidden" : "flex"}
            `
                }>
                    <div className="w-4/5 h-3/5 bg-white border shadow-lg border-gray-300 rounded-full relative">
                        <div className="grid grid-cols-4  w-full h-full">

                            <div className="bg-white hover:bg-gray-300 flex flex-col items-center justify-center  rounded-full relative cursor-pointer">
                                <label htmlFor="search" className="w-3/4 text-lg font-bold
                             text-gray-600 after:content-[''] after:w-px after:h-1/2 after:absolute after:bottom-1/4 after:right-2 after:bg-gray-300">Location</label>
                                <input type="text" placeholder="Where are you" id="search" className=" focus:outline-none bg-transparent h-1/2 w-3/4 text-xl border-0" autoComplete="off"/>
                            </div>

                            <div className="bg-white hover:bg-gray-300 rounded-full cursor-pointer relative flex items-center flex-col justify-evenly " onClick={() => { setShowDatePicker(!ShowDatePicker) }}>
                                <span className="w-3/4 text-lg font-bold
                             text-gray-600 after:content-[''] after:w-px after:h-1/2 after:absolute after:bottom-1/4 after:right-2 after:bg-gray-300">Check in</span>
                                <span className="h-1/2 w-3/4 text-xl border-0 text-gray-400">{ShowDatePicker ? "Add dates" : DateHere[0].startDate.toLocaleDateString()}</span>
                            </div>

                            {ShowDatePicker &&

                                <div className="absolute z-10 xl:top-24 xl:left-24 top-24 lg:top-24  md:inset-0 ">
                                    <DateRangePicker
                                        onChange={item => setDateHere([item.selection])}
                                        showSelectionPreview={true}
                                        moveRangeOnFirstSelection={false}
                                        months={2}
                                        ranges={DateHere}
                                        direction="horizontal"
                                        minDate={new Date()}
                                    />
                                </div>

                            }
                            <div className="bg-white hover:bg-gray-300 flex items-center flex-col justify-evenly  cursor-pointer rounded-full relative">
                                <span className="w-3/4 text-lg font-bold
                             text-gray-600 after:content-[''] after:w-px after:h-1/2 after:absolute after:bottom-1/4 after:right-2 after:bg-gray-300">Check out</span>
                                <span className="h-1/2 w-3/4 text-xl border-0 text-gray-400">{ShowDatePicker ? "Add dates" : DateHere[0].endDate.toLocaleDateString()}</span>
                            </div>
                            <div className="bg-white hover:bg-gray-300 rounded-full cursor-pointer flex items-center flex-col justify-evenly relative" onClick={() => { setGuestSearch(!ShowGuestSearch) }}>

                                <span className="w-3/4 text-xl font-bold
                             text-gray-600">Guests</span>
                                <span className="h-1/2 w-3/4 text-lg border-0 text-gray-400">Add guests</span>
                            </div>
                            {

                                ShowGuestSearch &&
                                <ShowGuests />
                            }

                        </div>
                        <div className="bg-red-500 w-14 rounded-full absolute top-4 right-4 h-14 hover:bg-red-600 cursor-pointer flex items-center justify-center text-white">
                            <SearchIcon width={30} height={30} onClick={()=>{
                                router.push('/secondpage')
                            }} />
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default LargeHeader
