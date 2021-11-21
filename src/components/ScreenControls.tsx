import { Download, NavigateBefore, NavigateNext } from "@mui/icons-material";
import { IconButton, Tooltip } from "@mui/material";
import { Box } from "@mui/system";
import { Dispatch, SetStateAction, useCallback } from "react";

export type ScreenNumber = 1 | 2 | 3;

interface Props {
  screen: ScreenNumber;
  setScreen: Dispatch<SetStateAction<ScreenNumber>>;
  saveBackground(): void;
  hasBackground: boolean;
}

export default function ScreenControls({
  screen,
  setScreen,
  saveBackground,
  hasBackground,
}: Props) {
  const onPrev = useCallback(() => {
    setScreen((s) => (s > 1 ? s - 1 : s) as ScreenNumber);
  }, [setScreen]);

  const onNext = useCallback(() => {
    setScreen((s) => (s < 3 ? s + 1 : s) as ScreenNumber);
  }, [setScreen]);

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      width="100%"
    >
      <Tooltip title="Previous Screen">
        <IconButton onClick={onPrev} disabled={screen < 2}>
          <NavigateBefore />
        </IconButton>
      </Tooltip>
      <Tooltip title="Next Screen">
        <IconButton onClick={onNext} disabled={screen > 2}>
          <NavigateNext />
        </IconButton>
      </Tooltip>
      <Box sx={{ flexGrow: 1 }} />
      <Tooltip title="Download resized file">
        <IconButton
          onClick={saveBackground}
          size="large"
          color="primary"
          disabled={!hasBackground}
        >
          <Download />
        </IconButton>
      </Tooltip>
    </Box>
  );
}
