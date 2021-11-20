import { Grid } from "@mui/material";
import { alpha, Box, SxProps } from "@mui/system";
import { useMemo } from "react";
import cinewhoop from "../assets/cinewhoop.png";
import babyshark from "../assets/babyshark.png";
import cinem8 from "../assets/cinem8.png";
import skyeliner from "../assets/skyeliner.png";
import { useColors } from "../utils/Theme";

export default function Models() {
  const { SECONDARY1, SECONDARY2, PRIMARY2 = "", ACTIVE, FOCUS } = useColors();
  const modelBox: SxProps = useMemo(
    () => ({
      position: "relative",
      backgroundColor: PRIMARY2,
      height: 85,
      backgroundSize: "contain",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center center",
      border: `1px solid ${SECONDARY2}`,
    }),
    [PRIMARY2, SECONDARY2]
  );
  const modelTitle: SxProps = useMemo(
    () => ({
      color: SECONDARY1,
      width: "100%",
      textAlign: "center",
      lineHeight: "1.1em",
    }),
    [SECONDARY1]
  );
  return (
    <Box padding={1}>
      <Grid container spacing={1}>
        <Grid item xs={4}>
          <Box
            sx={{
              ...modelBox,
              backgroundImage: `url(${cinewhoop})`,
              border: `1px solid ${FOCUS}`,
            }}
          >
            <Box
              sx={{
                ...modelTitle,
                backgroundColor: ACTIVE,
              }}
            >
              Cinewhoop
            </Box>
          </Box>
        </Grid>
        <Grid item xs={4}>
          <Box
            sx={{
              ...modelBox,
              backgroundImage: `url(${cinem8})`,
            }}
          >
            <Box
              sx={{
                ...modelTitle,
                backgroundColor: alpha(PRIMARY2, 0.75),
              }}
            >
              CINE M8
            </Box>
          </Box>
        </Grid>
        <Grid item xs={4}>
          <Box
            sx={{
              ...modelBox,
              backgroundImage: `url(${babyshark})`,
            }}
          >
            <Box
              sx={{
                ...modelTitle,
                backgroundColor: alpha(PRIMARY2, 0.75),
              }}
            >
              Babyshark
            </Box>
          </Box>
        </Grid>
        <Grid item xs={4}>
          <Box
            sx={{
              ...modelBox,
              backgroundImage: `url(${skyeliner})`,
            }}
          >
            <Box
              sx={{
                ...modelTitle,
                backgroundColor: alpha(PRIMARY2, 0.75),
              }}
            >
              Skyeliner
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
