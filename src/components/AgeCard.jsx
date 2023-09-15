import { Typography } from "@mui/material";
import React from "react";

export default function AgeCard() {
  return (
    <>
      <Typography variant="h5" className="text-white">
        Age
      </Typography>
      <Typography variant="h1" className="text-white">
        23
      </Typography>
      <Typography variant="h5" className="text-white">
        Years Old
      </Typography>
    </>
  );
}
