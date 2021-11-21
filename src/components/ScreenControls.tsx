import { Download, NavigateBefore, NavigateNext } from "@mui/icons-material";
import { IconButton, Tooltip } from "@mui/material";
import { Box } from "@mui/system";
import { Dispatch, SetStateAction, useCallback } from "react";
import { cropImg } from "../utils/Crop";

export type ScreenNumber = 1 | 2 | 3;

interface Props {
  screen: ScreenNumber;
  setScreen: Dispatch<SetStateAction<ScreenNumber>>;
  fileContent?: string | null;
}

export default function ScreenControls({
  screen,
  setScreen,
  fileContent,
}: Props) {
  const onPrev = useCallback(() => {
    setScreen((s) => (s > 1 ? s - 1 : s) as ScreenNumber);
  }, [setScreen]);

  const onNext = useCallback(() => {
    setScreen((s) => (s < 3 ? s + 1 : s) as ScreenNumber);
  }, [setScreen]);

  const downloadFile = useCallback(() => {
    if (fileContent) {
      cropImg(fileContent).then((blob?: Blob) => {
        if (blob) {
          saveAs(blob, "background.png");
        }
      });
    }
  }, [fileContent]);

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
          onClick={downloadFile}
          size="large"
          color="primary"
          disabled={!fileContent}
        >
          <Download />
        </IconButton>
      </Tooltip>
    </Box>
  );
}
