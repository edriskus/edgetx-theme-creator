import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useColors } from "../utils/Theme";
import Channels from "./Channels";
import Dropdown from "./Dropdown";
import Layout from "./Layout";
import Model from "./Model";
import Models from "./Models";
import Navbar from "./Navbar";
import Preference from "./Preference";
import Sliders from "./Sliders";
import Titlebar from "./Titlebar";

interface Props {
  background?: string | null;
}

export function Screen1({ background }: Props) {
  return (
    <Layout background={background}>
      <>
        <Navbar />
        <Sliders>
          <Box width="100%" height="100%" flexDirection="row">
            <Grid container>
              <Grid item xs={6}>
                <Channels />
              </Grid>
              <Grid item xs={6}>
                <Model />
              </Grid>
            </Grid>
          </Box>
        </Sliders>
      </>
    </Layout>
  );
}

export function Screen2({ background }: Props) {
  const { SECONDARY3 } = useColors();
  return (
    <Layout background={background}>
      <Box width="100%" height="100%" sx={{ backgroundColor: SECONDARY3 }}>
        <Navbar />
        <Titlebar title="Multirotor" />
        <Models />
      </Box>
    </Layout>
  );
}

export function Screen3({ background }: Props) {
  const { SECONDARY3, WARNING, DISABLED } = useColors();
  return (
    <Layout background={background}>
      <Box width="100%" height="100%" sx={{ backgroundColor: SECONDARY3 }}>
        <Navbar />
        <Titlebar title="HARDWARE" />
        <Preference title="RTC Batt">2.95V</Preference>
        <Preference title="Max bauds">
          <Dropdown edit>400k</Dropdown>
        </Preference>
        <Preference title="Serial port">
          <Dropdown>OFF</Dropdown>
        </Preference>
        <Preference title="Serial port">
          <span style={{ color: DISABLED }}>Disabled</span>
        </Preference>
        <Preference title="Max bauds">
          <Dropdown>7.63V</Dropdown>
        </Preference>
        <Preference title="">
          <span style={{ color: WARNING }}>Warning: use 3.3 logic levels</span>
        </Preference>
      </Box>
    </Layout>
  );
}
