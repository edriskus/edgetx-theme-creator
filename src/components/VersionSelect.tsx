import { ArrowDropDown } from "@mui/icons-material";
import { Button, Menu, MenuItem, Typography } from "@mui/material";
import { MouseEvent, useCallback, useContext, useState } from "react";
import { Version, VersionContext } from "../utils/Version";

export default function VersionSelect() {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const { version, setVersion } = useContext(VersionContext);

  const handleClick = useCallback((event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  }, []);

  const handleClose = useCallback(() => {
    setAnchorEl(null);
  }, []);

  const handleVersion = useCallback(
    (version: Version) => () => {
      setVersion(version);
      handleClose();
    },
    [handleClose, setVersion]
  );

  return (
    <>
      <Button onClick={handleClick}>
        EdgeTX v{version} <ArrowDropDown sx={{ marginLeft: 0.5 }} />
      </Button>
      <Menu anchorEl={anchorEl} open={!!anchorEl} onClose={handleClose}>
        <MenuItem onClick={handleVersion("2.5")}>v2.5</MenuItem>
        <MenuItem onClick={handleVersion("2.6")}>
          v2.6
          <Typography
            variant="caption"
            color="textSecondary"
            sx={{ marginLeft: 0.5 }}
          >
            (experimental)
          </Typography>
        </MenuItem>
      </Menu>
    </>
  );
}
