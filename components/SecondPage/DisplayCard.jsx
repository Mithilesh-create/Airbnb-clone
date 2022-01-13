import Img from "../../assets/Img.jpeg"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Image from "next/image";
import { HeartIcon } from "@heroicons/react/outline"
import { StarIcon } from "@heroicons/react/solid";

function DisplayCard() {

    return (
        <div className=" flex m-2 p-2 rounded-md  border-b-2 cursor-pointer bg-gray-100" style={{ height: '40vh' }}>
            <div className="w-2/5 h-full flex items-center justify-center">
                <Carousel showThumbs={false} useKeyboardArrows={false} autoPlay={false} infiniteLoop={true} emulateTouch={true} showArrows={true} className="h-full w-full  flex items-center rounded-l-md justify-center ">
                    <div className="w-full h-full ">
                        <Image src={Img} alt="house" className="w-full h-full" />
                    </div>
                    <div className="w-full h-full">
                        <Image src={Img} alt="house" className="w-full h-full" />
                    </div>
                    <div className="w-full h-full">
                        <Image src={Img} alt="house" className="w-full h-full" />
                    </div>
                    <div className="w-full h-full">
                        <Image src={Img} alt="house" className="w-full h-full" />
                    </div>
                </Carousel>

            </div>
            <div className="w-3/5 flex flex-col p-4">
                <div className=" h-3/4 w-full flex flex-row ">
                    <div className="w-4/5 h-full  flex flex-col  justify-evenly ">
                        <span className="text-gray-600 text-lg">Entire apartment in London</span>
                        <span className="text-gray-900 text-xl">1 BHK Apartment with Scenic View of Yeoor Hills!!</span>
                        <span className="text-gray-800 text-md">4 guests .1 bedroom .1 bed .1 bathroom . Wifi . Air conditioning . Kitchen . Washing Machine</span>
                    </div>
                    <div className="w-1/5 h-full flex items-center justify-end">
                        <HeartIcon width={30} height={30} />
                    </div>
                </div>
                <div className="h-1/5 w-full flex flex-row">
                    <div className="w-1/2 h-full flex flex-col items-start justify-around sm:justify-around text-xl font-semibold ">
                        <div className="flex justify-center items-center pl-1">
                            <span>4.4</span>
                            <StarIcon className=" text-red-500" width={25} height={25} />
                        </div>
                        <span className="text-md font-extralight">(44 reviews)</span>
                    </div>
                    <div className="w-1/2 h-full  flex items-center justify-end">
                    <span className="text-xl font-semibold">&#8377; 2,200 / night</span>
                    </div>
                </div>


            </div>
        </div>

    )
}

export default DisplayCard
