import { alpha, Box } from "@mui/system";
import React from "react";
import { useColors } from "../utils/Theme";

interface Props {
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  rotation?: string;
}

export default function Slider({ top, left, right, bottom, rotation }: Props) {
  const { SECONDARY1, PRIMARY1, FOCUS } = useColors();
  return (
    <Box
      position="absolute"
      top={top}
      left={left}
      right={right}
      bottom={bottom}
      sx={{
        transform: `rotate(${rotation ?? "0deg"})`,
        display: "flex",
        flexDirection: "row",
      }}
    >
      <Box>
        {new Array(40).fill(true).map((_, i) => (
          <Box
            key={i}
            sx={{ width: 9, height: "1px", backgroundColor: SECONDARY1 }}
            marginY="3px"
          />
        ))}
      </Box>
      <Box
        width={8}
        height={160}
        sx={{ backgroundColor: SECONDARY1 }}
        marginLeft="7px"
      />
      <Box
        width={16}
        height={16}
        sx={{
          backgroundColor: FOCUS,
          position: "absolute",
          boxShadow: `0px 0px 2px 1px ${alpha(PRIMARY1 ?? "", 0.5)}`,
          top: "calc(50% - 8px)",
          left: 5,
        }}
        marginLeft="7px"
      />
      <Box
        width={16}
        height={16}
        sx={{
          backgroundColor: FOCUS,
          position: "absolute",
          boxShadow: `0px 0px 2px 1px ${alpha(PRIMARY1 ?? "", 0.5)}`,
          top: "10%",
          left: -11,
        }}
        marginLeft="7px"
      />
    </Box>
  );
}
