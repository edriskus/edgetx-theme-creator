import { Box } from "@mui/system";
import Channels from "./Channels";
import Model from "./Model";
import Navbar from "./Navbar";
import Sliders from "./Sliders";
import image from "../assets/ETX_bg_480x272.png";

export default function Screen() {
  return (
    <Box
      position="relative"
      width={"100vw"}
      maxWidth={480}
      height={"56.66vw"}
      maxHeight={272}
      sx={{ backgroundImage: `url(${image})` }}
    >
      <Navbar />
      <Sliders>
        <Box width="100%" height="100%">
          <Channels />
          <Model />
        </Box>
      </Sliders>
    </Box>
  );
}
