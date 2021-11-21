import { Download, Save } from "@mui/icons-material";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  Grid,
  Link,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { useCallback, useState } from "react";

interface Props {
  saveYml(): void;
  saveBackground(): void;
  hasBackground: boolean;
}

export default function HowToInstall({
  saveYml,
  saveBackground,
  hasBackground,
}: Props) {
  const [open, setOpen] = useState(false);
  const handleOpen = useCallback(() => setOpen(true), []);
  const handleClose = useCallback(() => setOpen(false), []);
  return (
    <>
      <Button onClick={handleOpen} variant="contained">
        <Save sx={{ marginRight: 0.5 }} />
        Download
      </Button>
      <Dialog open={open} onClose={handleClose} maxWidth="md">
        <DialogContent>
          <Grid container spacing={2}>
            <Grid item sm={4}>
              <Typography
                variant="h2"
                align="center"
                color="textSecondary"
                gutterBottom
              >
                1
              </Typography>
              <DialogContentText align="center">
                Copy the downloaded <b>theme .yml file</b> into <b>THEMES</b>{" "}
                directory of your SD card.
              </DialogContentText>
              <Box display="flex" justifyContent="center" marginTop={2}>
                <Button
                  size="small"
                  variant="contained"
                  color="primary"
                  onClick={saveYml}
                >
                  <Download sx={{ marginRight: 0.5 }} /> Theme .yml
                </Button>
              </Box>
            </Grid>
            <Grid item sm={4}>
              <Typography
                variant="h2"
                align="center"
                color="textSecondary"
                gutterBottom
              >
                2
              </Typography>
              <DialogContentText align="center">
                Power on the radio and <b>select the theme</b> in UI settings
                menu.
              </DialogContentText>
            </Grid>
            {hasBackground ? (
              <Grid item sm={4}>
                <Typography
                  variant="h2"
                  align="center"
                  color="textSecondary"
                  gutterBottom
                >
                  3
                </Typography>
                <DialogContentText align="center">
                  To change the wallpaper, download the resized{" "}
                  <b>background.png</b> and move it to <b>THEMES/EdgeTX</b>{" "}
                  folder
                </DialogContentText>
                <Box display="flex" justifyContent="center" marginTop={2}>
                  <Button
                    size="small"
                    variant="contained"
                    onClick={saveBackground}
                  >
                    <Download sx={{ marginRight: 0.5 }} /> Background
                  </Button>
                </Box>
              </Grid>
            ) : null}
          </Grid>
        </DialogContent>
        <DialogActions sx={{ alignItems: "center" }}>
          <Typography variant="body2" align="center" sx={{ marginLeft: 2 }}>
            <Link target="_blank" href="https://github.com/EdgeTX/themes">
              More info about EdgeTX themes
            </Link>
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <Button onClick={handleClose}>Done</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
