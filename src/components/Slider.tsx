import { Box } from "@mui/system";
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
  const { SECONDARY1 } = useColors();
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
    </Box>
  );
}
