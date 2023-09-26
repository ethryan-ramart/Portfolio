import React from "react";
import {
  IconBrandAws,
  IconBrandCpp,
  IconBrandCss3,
  IconBrandGithub,
  IconBrandHtml5,
  IconBrandJavascript,
  IconBrandPython,
  IconBrandReact,
  IconBrandTailwind,
} from "@tabler/icons-react";
import { Tooltip } from "@mui/material";

export default function LenguajesCard() {
  return (
    <div className="grid grid-cols-3 grid-rows-3 gap-2 container mx-auto">
      <Tooltip title="Javascript" placement="bottom">
        <div className=" flex felx-col items-center justify-center col-span-1 aspect-square">
          <IconBrandJavascript strokeWidth="2px" size="70%" />
        </div>
      </Tooltip>
      <Tooltip title="HTML" placement="bottom">
        <div className=" flex felx-col items-center justify-center col-span-1 aspect-square">
          <IconBrandHtml5 strokeWidth="2px" size="70%" />
        </div>
      </Tooltip>
      <Tooltip title="CSS" placement="bottom">
        <div className=" flex felx-col items-center justify-center col-span-1 aspect-square">
          <IconBrandCss3 strokeWidth="2px" size="70%" />
        </div>
      </Tooltip>
      <Tooltip title="TailWind" placement="bottom">
        <div className=" flex felx-col items-center justify-center col-span-1 aspect-square">
          <IconBrandTailwind strokeWidth="2px" size="70%" />
        </div>
      </Tooltip>
      <Tooltip title="React JS" placement="bottom">
        <div className=" flex felx-col items-center justify-center col-span-1 aspect-square">
          <IconBrandReact strokeWidth="2px" size="70%" />
        </div>
      </Tooltip>
      <Tooltip title="Python" placement="bottom">
        <div className=" flex felx-col items-center justify-center col-span-1 aspect-square">
          <IconBrandPython strokeWidth="2px" size="70%" />
        </div>
      </Tooltip>
      <Tooltip title="Github" placement="bottom">
        <div className=" flex felx-col items-center justify-center col-span-1 aspect-square">
          <IconBrandGithub strokeWidth="2px" size="70%" />
        </div>
      </Tooltip>
      <Tooltip title="C++" placement="bottom">
        <div className=" flex felx-col items-center justify-center col-span-1 aspect-square">
          <IconBrandCpp strokeWidth="2px" size="70%" />
        </div>
      </Tooltip>
      <Tooltip title="AWS" placement="bottom">
        <div className=" flex felx-col items-center justify-center col-span-1 aspect-square">
          <IconBrandAws strokeWidth="2px" size="70%" />
        </div>
      </Tooltip>
    </div>
  );
}
