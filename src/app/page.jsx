"use client";
import AgeCard from "@/components/AgeCard";
import PresentationCard from "@/components/PresentationCard";
import SwitchTheme from "@/components/SwitchTheme";
import useTheme from "@/hooks/useTheme";
import { LinkedIn } from "@mui/icons-material";

export default function Home() {
  const theme = useTheme();
  useEffect(() => {
    const item = localStorage.getItem("key");
  }, []);
  return (
    <div id="body" className="light-mode">
      <div className="bounce-animation grid grid-cols-3 gap-2 md:grid-cols-4 md:gap-4 my-5 container mx-auto xl:px-20  md:p-5">
        <div className="relative col-span-3 aspect-square md:aspect-auto md:row-span-2 bg-[#1c053a9c] dark:bg-[#af72ff56] rounded-3xl overflow-hidden">
          <PresentationCard />
        </div>
        <div className="flex flex-col justify-center items-center bg-[#1c053a9c] dark:bg-[#af72ff56] rounded-3xl relative overflow-hidden col-span-1 aspect-square shadow-sm ">
          <SwitchTheme theme={theme} />
        </div>
        <div className="flex flex-col justify-center items-center bg-[#1c053a9c] dark:bg-[#af72ff56] rounded-3xl relative overflow-hidden col-span-1 aspect-square shadow-sm"></div>
        <a
          href="https://www.linkedin.com/in/leonelramart/"
          target="_blank"
          className="flex flex-col justify-center items-center bg-[#1178ff9c] dark:bg-[#49a7ff56] rounded-3xl relative overflow-hidden col-span-1 aspect-square shadow-sm cursor-pointer hover:scale-[103%] transition duration-300 ease-in-out"
        >
          <LinkedIn sx={{ fontSize: "900%" }} />
        </a>
        <div className="flex flex-col text-white rounded-3xl flex relative overflow-hidden aspect-square shadow-sm bg-[#ff4848d3] p-4 justify-center items-center">
          <AgeCard />
        </div>
        <a className="relative rounded-3xl col-span-2 md:aspect-auto overflow-hidden cursor-pointer hover:scale-[103%] transition duration-500 ease-in-out bg-[#1c053a9c]"></a>
      </div>
    </div>
  );
}
