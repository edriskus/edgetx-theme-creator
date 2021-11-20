import {
  Card,
  CardContent,
  Container,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import Colors from "../components/Colors";
import Actions from "../components/Actions";
import Footer from "../components/Footer";
import Summary from "../components/Summary";
import BackgroundUpload from "../components/BackgroundUpload";
import { useMemo, useState } from "react";
import { Screen1, Screen2, Screen3 } from "../visuals/Screens";
import ScreenControls, { ScreenNumber } from "../components/ScreenControls";

const screenMap = {
  1: Screen1,
  2: Screen2,
  3: Screen3,
};

function App() {
  const [background, setBackground] = useState<string | null>();
  const [screen, setScreen] = useState<ScreenNumber>(1);
  const Screen = useMemo(() => screenMap[screen], [screen]);

  return (
    <Container
      maxWidth="md"
      sx={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <Box
        padding={2}
        sx={{
          display: "flex",
          // alignItems: "center",
          // justifyContent: "center",
          // alignContent: "center",
          flexDirection: "column",
        }}
      >
        <Typography variant="h2">EdgeTX Theme Creator</Typography>
        <Typography gutterBottom variant="body2" color="textSecondary">
          This is an experimental tool that has only been tested with{" "}
          <b>Edge TX 2.5</b> and on <b>Radiomaster TX16S</b>. The resulting
          theme might display differently using different radios and might not
          work with upcoming EdgeTX releases.
        </Typography>
      </Box>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Card elevation={4}>
            <CardContent>
              <Stack spacing={2} width="100%">
                <Colors />
                <Summary />
                <Actions />
              </Stack>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box sx={{ width: "100%", position: "relative" }}>
            <BackgroundUpload onFile={setBackground} />
            <Screen background={background} />
          </Box>
          <ScreenControls screen={screen} setScreen={setScreen} />
          <Typography
            variant="body2"
            gutterBottom
            color="textSecondary"
            sx={{ paddingTop: 2 }}
          >
            Copy the downloaded file into THEMES directory of you SD card. Then
            power on the radio and select the theme in UI settings menu.
            <br />
            <b>Note:</b> Some widgets might not display the theme colors because
            they're configurable individually from the widgets menu
          </Typography>
        </Grid>
      </Grid>
      <Footer />
    </Container>
  );
}

export default App;
