import CustomBtns from "../CustomBtns"

function BotttomHero() {
    return (
        <div className="h-56 w-full flex flex-col items-center justify-evenly font-bold text-center text-white mb-7">
            <span className="text-3xl">Not sure where to go? <br />
              Perfect.
            </span>
            <CustomBtns className="w-44 h-16  text-xl rounded-full flex items-center justify-center bg-white"
            textclassName="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text" onClick={() => { }} Title="I'm flexible" />
          </div>
    )
}

export default BotttomHero
