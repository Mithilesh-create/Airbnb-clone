import DynamicHeroIcon from "./dynamicIcons/DynamicHeroIcon"

function Footer() {
    return (
        <div className="bg-gray-100 w-full">
            <div className="p-5 border-b">
                <span className="font-bold">Support</span>
                <ul className="whitespace-nowrap md:grid md:grid-cols-3">
                    <li className="py-2 hover:underline cursor-pointer">Help Center</li>
                    <li className="py-2 hover:underline cursor-pointer">Safety information</li>
                    <li className="py-2 hover:underline cursor-pointer">Cancellation options</li>
                    <li className="py-2 hover:underline cursor-pointer">Our COVID-19 Response</li>
                    <li className="py-2 hover:underline cursor-pointer">Supporting people with disabilities</li>
                    <li className="py-2 hover:underline cursor-pointer">Report a neighbourhood concern</li>
                </ul>
            </div>
            <div className="p-5 border-b">
                <span className="font-bold">Community</span>
                <ul className="whitespace-nowrap md:grid md:grid-cols-3">
                    <li className="py-2 hover:underline cursor-pointer">Airbnb.org: disaster relief housing</li>
                    <li className="py-2 hover:underline cursor-pointer">Support Afghan refugees</li>
                    <li className="py-2 hover:underline cursor-pointer">Celebrating diversity & belonging</li>
                    <li className="py-2 hover:underline cursor-pointer">Combating discrimination</li>
                </ul>
            </div>
            <div className="p-5 border-b">
                <span className="font-bold">Hosting</span>
                <ul className="whitespace-nowrap md:grid md:grid-cols-3">
                    <li className="py-2 hover:underline cursor-pointer">Try hosting</li>
                    <li className="py-2 hover:underline cursor-pointer">AirCover: protection for Hosts</li>
                    <li className="py-2 hover:underline cursor-pointer">Explore hosting resources</li>
                    <li className="py-2 hover:underline cursor-pointer">Visit our community forum</li>
                    <li className="py-2 hover:underline cursor-pointer">How to host responsibly</li>
                </ul>
            </div>
            <div className="p-5 border-b">
                <span className="font-bold">About</span>
                <ul className="whitespace-nowrap md:grid md:grid-cols-3">
                    <li className="py-2 hover:underline cursor-pointer">Newsroom</li>
                    <li className="py-2 hover:underline cursor-pointer">Learn about new features</li>
                    <li className="py-2 hover:underline cursor-pointer">Letter from our founders</li>
                    <li className="py-2 hover:underline cursor-pointer">Careers</li>
                    <li className="py-2 hover:underline cursor-pointer">Investors</li>
                    <li className="py-2 hover:underline cursor-pointer">Airbnb Luxe</li>
                </ul>
            </div>
            <div className="p-5 border-b md:flex md:flex-col md:items-center">
                <div className="flex items-center justify-between w-1/3 md:w-48">

                    <div className="flex font-bold">
                        <DynamicHeroIcon icon="GlobeAltIcon" width={25} height={25} />
                        <span className="underline cursor-pointer hover:text-gray-500">English (IN)</span>
                    </div>
                    <div className="flex font-bold">
                        <DynamicHeroIcon icon="CurrencyRupeeIcon" width={25} height={25} />
                        <span className="underline cursor-pointer hover:text-gray-500">INR</span>
                    </div>

                </div>
                <ul className="whitespace-nowrap ">
                    <li className="py-2 md:flex md:justify-center">© 2021 Airbnb, Inc.</li>

                    <ul className="flex">
                        
                        <li className="hover:underline cursor-pointer">Privacy</li>
                        <li className="ml-8 hover:underline cursor-pointer">Terms</li>
                        <li className="ml-8 hover:underline cursor-pointer">Sitemap</li>
                        <li className="ml-8 hover:underline cursor-pointer">Company Details</li>
                    </ul>
                </ul>
            </div>
        </div>
    )
}

export default Footer
