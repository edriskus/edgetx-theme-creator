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
import { useCallback, useMemo, useState } from "react";
import { useSummary } from "../utils/Theme";
import { useVersion } from "../utils/Version";

interface Props {
  saveYml(): void;
  saveZip(): void;
  saveBackground(): void;
  hasBackground: boolean;
}

export default function HowToInstall({
  saveZip,
  saveYml,
  saveBackground,
  hasBackground,
}: Props) {
  const { name } = useSummary();
  const [open, setOpen] = useState(false);
  const version = useVersion();
  const handleOpen = useCallback(() => setOpen(true), []);
  const handleClose = useCallback(() => setOpen(false), []);
  const itemSize = useMemo(() => {
    if (version === "2.6" || !hasBackground) {
      return 6;
    } else {
      return 4;
    }
  }, [version, hasBackground]);
  const maxWidth = useMemo(() => {
    if (version === "2.6" || !hasBackground) {
      return "sm";
    } else {
      return "md";
    }
  }, [version, hasBackground]);
  return (
    <>
      <Button onClick={handleOpen} variant="contained">
        <Save sx={{ marginRight: 0.5 }} />
        Download
      </Button>
      <Dialog open={open} onClose={handleClose} maxWidth={maxWidth}>
        <DialogContent>
          <Grid container spacing={2}>
            <Grid item sm={itemSize}>
              <Typography
                variant="h2"
                align="center"
                color="textSecondary"
                gutterBottom
              >
                1
              </Typography>
              {version === "2.5" && (
                <>
                  <DialogContentText align="center">
                    Copy the downloaded <b>theme .yml file</b> into{" "}
                    <b>THEMES</b> directory of your SD card.
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
                </>
              )}
              {version === "2.6" && (
                <>
                  <DialogContentText align="center">
                    Extract the downloaded <b>theme .zip file</b> and copy the
                    whole "{name}" folder into <b>THEMES</b> directory of your
                    SD card.
                  </DialogContentText>
                  <Box display="flex" justifyContent="center" marginTop={2}>
                    <Button
                      size="small"
                      variant="contained"
                      color="primary"
                      onClick={saveZip}
                    >
                      <Download sx={{ marginRight: 0.5 }} /> Theme .zip
                    </Button>
                  </Box>
                </>
              )}
            </Grid>
            <Grid item sm={itemSize}>
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
            {version === "2.5" && hasBackground ? (
              <Grid item sm={itemSize}>
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
