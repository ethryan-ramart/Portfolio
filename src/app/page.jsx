"use client";
import AgeCard from "@/components/AgeCard";
import DownloadCV from "@/components/DownloadCV";
import LaboralExperienceCard from "@/components/LaboralExperienceCard";
import LenguajesCard from "@/components/LenguajesCard";
import PresentationCard from "@/components/PresentationCard";
import SwitchTheme from "@/components/SwitchTheme";
import useTheme from "@/hooks/useTheme";
import { LinkedIn } from "@mui/icons-material";
import { useEffect } from "react";

export default function Home() {
  const theme = useTheme();
  return (
    <div id="body" className="light">
      <div className="noise">
        <div className="bounce-animation grid grid-cols-3 gap-2 md:grid-cols-4 md:gap-4 my-5 container mx-auto xl:px-20  md:p-5">
          <div className="relative col-span-3 aspect-square md:aspect-auto md:row-span-2 light:bg-[#6e5d83] dark:bg-[#af72ff56] rounded-3xl overflow-hidden">
            <PresentationCard />
          </div>
          <div className="flex flex-col justify-center items-center bg-[#1c053a9c] dark:bg-[#af72ff56] rounded-3xl relative overflow-hidden col-span-1 aspect-square shadow-sm ">
            <SwitchTheme theme={theme} />
          </div>
          <div className="flex flex-col justify-center items-center bg-[#1c053a9c] dark:bg-[#af72ff56] rounded-3xl relative overflow-hidden col-span-1 aspect-square shadow-sm">
            <LenguajesCard />
          </div>
          <a
            href="https://www.linkedin.com/in/leonelramart/"
            target="_blank"
            className="flex flex-col justify-center items-center bg-[#1178ff9c] dark:bg-[#49a7ff56] rounded-3xl relative overflow-hidden col-span-1 aspect-square shadow-sm cursor-pointer hover:scale-[103%] transition duration-300 ease-in-out"
          >
            <LinkedIn className="icono" />
          </a>
          <div className="flex flex-col text-white rounded-3xl flex relative overflow-hidden aspect-square shadow-sm bg-[#ff4848d3] p-4 justify-center items-center">
            <AgeCard />
          </div>
          <a className="flex flex-col justify-end items-center relative rounded-3xl col-span-2 md:aspect-auto overflow-hidden cursor-pointer hover:scale-[103%] transition duration-500 ease-in-out bg-[url(../../public/assets/images/dog-fire.gif)] bg-cover bg-center">
            <LaboralExperienceCard />
          </a>
          <div className="flex flex-col text-white rounded-3xl flex relative overflow-hidden aspect-square shadow-sm bg-[#a781b7] p-4  hover:scale-[103%] transition duration-500 justify-center items-center">
            <DownloadCV />
          </div>
        </div>
      </div>
    </div>
  );
}
