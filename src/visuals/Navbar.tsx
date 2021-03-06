import {
  Description,
  Settings,
  SignalCellularAlt,
  VolumeUp,
} from "@mui/icons-material";
import { alpha, Box } from "@mui/system";
import { useColors } from "../utils/Theme";

export default function Navbar() {
  const { SECONDARY1, PRIMARY2, FOCUS, PRIMARY1, PRIMARY3 } = useColors();
  return (
    <Box
      sx={{
        backgroundColor: SECONDARY1,
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
        flexDirection: "row",
      }}
      paddingRight={1}
      width="100%"
      height="17%"
    >
      <Box
        sx={{
          color: PRIMARY2,
          backgroundColor: FOCUS,
          height: "100%",
          width: 45,
          fontWeight: 500,
          lineHeight: ".7em",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 20,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <span style={{ fontSize: 12 }}>EDGE</span>
        <span>TX</span>
      </Box>
      <Box
        marginLeft={1}
        sx={{
          color: PRIMARY2,
          backgroundColor: FOCUS,
          height: "100%",
          width: 30,
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
          boxShadow: `0px 0px 2px 1px ${alpha(PRIMARY1 ?? "", 0.5)}`,
        }}
      >
        <Description sx={{ fill: PRIMARY2 }} fontSize="small" />
      </Box>
      <Box
        marginLeft={1}
        sx={{
          color: PRIMARY2,
          height: "100%",
          width: 30,
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Settings sx={{ fill: PRIMARY2 }} fontSize="small" />
      </Box>
      <Box sx={{ flexGrow: 1 }} />
      <VolumeUp sx={{ fill: PRIMARY2 }} fontSize="small" />
      <SignalCellularAlt
        sx={{ fill: PRIMARY3, marginX: 0.5 }}
        fontSize="large"
      />
      <Box sx={{ lineHeight: "1em", fontSize: 12, color: PRIMARY2 }}>
        5 Nov
        <br />
        21:55
      </Box>
    </Box>
  );
}
