"use client";
import AgeCard from "@/components/AgeCard";
import AwakeSwitch from "@/components/AwakeSwitch";
import useTheme from "@/hooks/useTheme";
import { LinkedIn } from "@mui/icons-material";
import { Switch } from "@mui/material";

export default function Home() {
  const theme = useTheme();
  return (
    <div className={theme.darkMode ? "dark" : "light"}>
      <div className="grid grid-cols-3 gap-2 md:grid-cols-4 md:gap-4 my-5 container mx-auto xl:px-20">
        <div className="relative col-span-3 aspect-square md:aspect-auto md:row-span-2 bg-[#1c053a9c] dark:bg-[#af72ff56] rounded-3xl overflow-hidden">
          
        </div>
        <div className="flex flex-col justify-center items-center bg-[#1c053a9c] dark:bg-[#af72ff56] rounded-3xl relative overflow-hidden col-span-1 aspect-square shadow-sm cursor-pointer hover:scale-[103%] transition duration-300 ease-in-out">
          <Switch checked={theme.darkMode} onChange={theme.toggleTheme} />
        </div>
        <div className="flex flex-col justify-center items-center bg-[#1c053a9c] dark:bg-[#af72ff56] rounded-3xl relative overflow-hidden col-span-1 aspect-square shadow-sm">
         <AwakeSwitch />
        </div>
        <a href="https://www.linkedin.com/in/leonelramart/" target="_blank" className="flex flex-col justify-center items-center bg-[#1178ff9c] dark:bg-[#49a7ff56] rounded-3xl relative overflow-hidden col-span-1 aspect-square shadow-sm cursor-pointer hover:scale-[103%] transition duration-300 ease-in-out">
          <LinkedIn sx={{fontSize: '900%'}} />
        </a>
        <div className="flex flex-col text-white rounded-3xl flex relative overflow-hidden aspect-square shadow-sm bg-[#ff4848d3] p-4 justify-center items-center">
          <AgeCard />
        </div>
        <a className="relative rounded-3xl col-span-2 md:aspect-auto overflow-hidden hover:scale-[103%] transition duration-500 ease-in-out bg-[#1c053a9c]">
          
        </a>
      </div>
    </div>
  );
}
