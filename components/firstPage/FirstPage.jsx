
import Headers from "../Headers";
import BottomTab from "../firstPage/BottomTab";
import BotttomHero from "./BotttomHero";
import CardsArea from "./CardsArea";
import ExperienceArea from "./ExperienceArea";
import BecomeHostArea from "./BecomeHostArea";
import Footer from "../Footer";
import { useEffect, useState } from "react";

function FirstPage() {
  const [scrollDir, setScrollDir] = useState(true);

  useEffect(() => {
    const threshold = 0;
    let lastScrollY = window.pageYOffset;
    let ticking = false;

    const updateScrollDir = () => {
      const scrollY = window.pageYOffset;

      if (Math.abs(scrollY - lastScrollY) < threshold) {
        ticking = false;
        return;
      }
      setScrollDir(scrollY > lastScrollY ? false : true);
      lastScrollY = scrollY > 0 ? scrollY : 0;
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollDir);
        ticking = true;
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollDir]);
  return (
    
    <div className="scrollbar-thin scrollbar-thumb-blue-500 scrollbar-track-blue-100 
     overflow-y-scroll font-fontpopins">
      <div className="h-full w-full">
        <div className="bg-behind-bg w-full h-[120vh] bg-no-repeat bg-cover bg-center flex flex-col justify-end align-middle items-center">
          <Headers />
          <BotttomHero />
          {
            scrollDir ?
              <BottomTab /> : null
          }
        </div>
        <CardsArea />
        <ExperienceArea />
        <BecomeHostArea />
        <Footer />
      </div>
    </div>



  );
}

export default FirstPage;
