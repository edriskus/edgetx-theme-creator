import { AirplanemodeActive } from "@mui/icons-material";
import { Box } from "@mui/system";
import cinewhoop from "../assets/cinewhoop.png";
import { useColors } from "../utils/Theme";

export default function Model() {
  const { SECONDARY1, SECONDARY3 } = useColors();
  return (
    <Box
      sx={{
        backgroundColor: SECONDARY3,
        position: "relative",
        height: "170px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        paddingTop: "50px",
      }}
      padding={2}
    >
      <Box
        padding={1}
        sx={{
          display: "flex",
          alignItems: "center",
          position: "absolute",
          color: SECONDARY1,
          left: 0,
          top: 0,
          width: "100%",
        }}
      >
        <AirplanemodeActive fontSize="medium" sx={{ marginRight: "5px" }} />
        Cinewhoop
      </Box>
      <Box
        sx={{
          width: "75%",
          height: 2,
          backgroundColor: SECONDARY1,
          position: "absolute",
          left: 35,
          top: 30,
        }}
      >
        &nbsp;
      </Box>
      <Box>
        <img src={cinewhoop} height={100} alt="Cinewhoop" />
      </Box>
    </Box>
  );
}
