import AgeCalculator from "@/js/AgeCalculator";
import { Typography } from "@mui/material";
import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import ResponsiveTypography from "./ResponsiveTypografy";

export default function AgeCard() {
  const [edad, setEdad] = useState(0);

  const props = useSpring({
    number: AgeCalculator("1999-10-10"),
    from: { number: 0 },
    config: { duration: 1000 },
    delay: 0,
    onFrame: ({ number }) => {
      setEdad(Math.floor(number));
    },
  });

  return (
    <>      
      <Typography variant="h2" className="text-white">
        <animated.span>
          {props.number.to((val) => Math.floor(val))}
        </animated.span>
      </Typography>
      <ResponsiveTypography text="Años" textColor="white" xs="2rem" sm="2.5rem"/>

    </>
  );
}
