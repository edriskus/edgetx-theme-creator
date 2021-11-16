import { Box } from "@mui/system";
import { PropsWithChildren } from "react";
import Slider from "./Slider";

export default function Sliders({ children }: PropsWithChildren<{}>) {
  return (
    <Box height="83%" position="relative" width="100%">
      <Box
        paddingTop="2%"
        paddingRight="9%"
        paddingLeft="9%"
        paddingBottom="10%"
        height="100%"
        boxSizing="border-box"
      >
        {children}
      </Box>

      <Slider top="8%" left=".8%" />
      <Slider top="8%" right=".8%" rotation="180deg" />
      <Slider bottom="-29%" left="16%" rotation="-90deg" />
      <Slider bottom="-29%" right="16%" rotation="-90deg" />
    </Box>
  );
}
