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
import Export from "../components/Export";
import Footer from "../components/Footer";
import Screen from "../components/Screen";
import Summary from "../components/Summary";

function App() {
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

                <Export />
              </Stack>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Screen />
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
