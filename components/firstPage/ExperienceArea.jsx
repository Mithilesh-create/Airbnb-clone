import CustomBigCard from "../CustomBigCard"

function ExperienceArea() {
    return (
        <div className="lg:grid lg:grid-cols-2 lg:h-3/4">
          <div className="h-screen lg:h-4/5 w-full flex flex-col justify-center items-center p-5">
            <CustomBigCard bg="bg-experience" title="Experiences" where="on your trips" />
          </div>
          <div className="h-screen  w-full flex flex-col justify-center items-center p-5 lg:h-4/5">
            <CustomBigCard bg="bg-experienceHome" title="Online Experiences" where="from home" />
          </div>
        </div>
    )
}

export default ExperienceArea
