import { Replay, SaveAlt } from "@mui/icons-material";
import { Button, IconButton, Stack, Tooltip } from "@mui/material";
import { Box } from "@mui/system";
import { useSaveYaml } from "../utils/Save";
import { useResetTheme } from "../utils/Theme";
import Import from "./Import";

export default function Export() {
  const saveYaml = useSaveYaml();
  const reset = useResetTheme();

  return (
    <Stack spacing={1} direction="row" width="100%" justifyContent="flex-end">
      <Import />
      <Box sx={{ flexGrow: 1 }} />
      <Tooltip title="Reset to default" color="primary">
        <IconButton onClick={reset}>
          <Replay />
        </IconButton>
      </Tooltip>
      <Button variant="contained" onClick={saveYaml}>
        <SaveAlt sx={{ marginRight: 0.5 }} />
        Save
      </Button>
    </Stack>
  );
}
