import { SearchIcon } from "@heroicons/react/outline";
import React, { useEffect, useState } from "react";
import LargeHeader from "./LargeHeader";
function Headers(props) {

  const [backgroundChange, setBackgroundChange] = useState(false);
  const [scrollValue, setScrollValue] = useState("");
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });
  const handleScroll = () => {
    setScrollValue(window.scrollY)
    if (window.scrollY > 100) {
      setBackgroundChange(true);
    } else {
      setBackgroundChange(false);
    }
  };

  return (
    <>
      <div className={`flex items-center justify-center h-24 lg:hidden w-full font-sans ${!props.second && "fixed top-0"}  ${backgroundChange ? "bg-gray-100" : "bg-none"} ${backgroundChange ? "border-b" : "border-0"}`}>
        <div className="bg-white rounded-full h-14 w-4/5 flex items-center justify-center font-semibold cursor-pointer">
          <SearchIcon className="text-red-500" width={24} height={20} />
          <span className="pl-1">Where are you going ?</span>
        </div>
      </div>
      <LargeHeader onGotScrolled={backgroundChange} ValueGive={scrollValue} second={props.second}/>
    </>
  );
}

export default Headers;
