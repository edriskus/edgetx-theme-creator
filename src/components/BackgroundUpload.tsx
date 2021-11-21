import { AddPhotoAlternate, Delete } from "@mui/icons-material";
import { IconButton, Tooltip } from "@mui/material";
import { Box } from "@mui/system";
import { useCallback, useEffect } from "react";
import { useFilePicker } from "use-file-picker";

interface Props {
  onFile(image: string | null): void;
}

export default function BackgroundUpload({ onFile }: Props) {
  const [openFileSelector, { filesContent }] = useFilePicker({
    // accept: ".yml",
    readAs: "DataURL",
    accept: "image/*",
  });

  useEffect(() => {
    if (filesContent.length > 0 && filesContent?.[0]?.content != null) {
      onFile(filesContent?.[0]?.content);
    }
    // eslint-disable-next-line
  }, [filesContent]);

  const removeFile = useCallback(() => onFile(null), [onFile]);

  return (
    <Box
      sx={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 1,
        background: "rgba(255,255,255,.75)",
        transition: "opacity 200ms",
        opacity: 0,
        ":hover": {
          opacity: 1,
        },
      }}
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Tooltip title="Add background">
        <IconButton onClick={openFileSelector} size="large" color="primary">
          <AddPhotoAlternate />
        </IconButton>
      </Tooltip>

      <Tooltip title="Remove background">
        <IconButton onClick={removeFile} size="large" color="error">
          <Delete />
        </IconButton>
      </Tooltip>
    </Box>
  );
}
