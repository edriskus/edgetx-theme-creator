import { Typography } from "@mui/material";
import { Box } from "@mui/system";

export default function Footer() {
  return (
    <Box
      paddingY={1}
      justifySelf="end"
      sx={{
        position: "sticky",
        top: "100%",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Typography align="center" color="textSecondary" variant="caption">
        Made for FPV pilots by an FPV pilot{" "}
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.youtube.com/user/edriskus"
        >
          @edriskus
        </a>
      </Typography>
    </Box>
  );
}
