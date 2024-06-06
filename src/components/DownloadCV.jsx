import { Button } from "@mui/material";
import { IconFileCv } from "@tabler/icons-react";
import React from "react";

export default function DownloadCV() {
  return (
    <a
      href="https://loufclkndybipdlnfclc.supabase.co/storage/v1/object/public/files/Ramirez_Martinez_Leonel_Jared_CV.pdf"
      target="_blank"
      className="flex flex-col justify-center items-center rounded-3xl relative overflow-hidden col-span-1 aspect-square shadow-sm cursor-pointer hover:scale-[103%] transition duration-300 ease-in-out"
    >
      <IconFileCv strokeWidth="2px" size="70%" />
    </a>

  );
}
