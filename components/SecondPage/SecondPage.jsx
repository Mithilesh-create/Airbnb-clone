import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import Footer from "../Footer"
import Headers from "../Headers"
const MapHouses = dynamic(() => import("./MapHouses"), {
    loading: () => "Loading...",
    ssr: false
});
const token = null ;//your mapbox token here
const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/greggs.json?access_token=${token}&bbox=-0.227654%2C51.464102%2C0.060737%2C51.553421&limit=10`;
import DisplayCard from "./DisplayCard";
import DisplayFilters from "./DisplayFilters";
function SecondPage() {
    const [locations, setLocations] = useState([]);
    useEffect(() => {
        const fetchLocations = async () => {
            await fetch(url).then((response) =>
                response.text()).then((res) => JSON.parse(res))
                .then((json) => {
                    console.log(json);
                    setLocations(json.features);
                }).catch((err) => console.log({ err }));
        };
        fetchLocations();
    }, []);


    return (
        <>
            <Headers second />
            <div className="h-auto w-full">
                <div className="lg:h-72 xl:h-16 flex flex-row items-center justify-start w-full">
                    <div className="grid grid-cols-4 lg:grid-cols-6 xl:flex">
                        <DisplayFilters name="Price" />
                        <DisplayFilters name="Type of place" />
                        <DisplayFilters name="Air Conditioning" />
                        <DisplayFilters name="Free Cancelations" />
                        <DisplayFilters name="WI-FI" />
                        <DisplayFilters name="Kitchen" />
                        <DisplayFilters name="Iron" />
                        <DisplayFilters name="Dedicated Workspace" />
                        <DisplayFilters name="Filters" filter />
                    </div>


                </div>
                <div className="w-full h-auto min-h-[120vh] grid grid-cols-3 relative">
                    <div className="col-span-3 xl:col-span-2 flex flex-col">
                        <DisplayCard />
                        <DisplayCard />
                        <DisplayCard />


                    </div>
                    <div className="hidden xl:block max-h-[120vh] sticky top-0 right-0">
                        <MapHouses locations={locations} token={token} />
                    </div>
                </div>
                <Footer />
            </div>
        </>
    )
}

export default SecondPage
