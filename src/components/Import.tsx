import { FolderOpen } from "@mui/icons-material";
import { Button } from "@mui/material";
import { useEffect } from "react";
import { useFilePicker } from "use-file-picker";
import { useOpenYaml } from "../utils/Save";

export default function Import() {
  const [openFileSelector, { filesContent }] = useFilePicker({
    accept: ".yml",
  });
  const openYaml = useOpenYaml();

  useEffect(() => {
    if (filesContent.length > 0 && filesContent?.[0]?.content != null) {
      openYaml(filesContent?.[0]?.content);
    }
    // eslint-disable-next-line
  }, [filesContent]);

  return (
    <Button variant="outlined" onClick={openFileSelector}>
      <FolderOpen sx={{ marginRight: 0.5 }} />
      Open
    </Button>
  );
}
