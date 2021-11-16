import { Replay, SaveAlt } from "@mui/icons-material";
import { Button, Stack } from "@mui/material";
import { useSaveYaml } from "../utils/Save";
import { useResetTheme } from "../utils/Theme";

export default function Export() {
  const saveYaml = useSaveYaml();
  const reset = useResetTheme();

  return (
    <Stack spacing={2} direction="row" width="100%" justifyContent="flex-end">
      <Button variant="text" onClick={reset}>
        <Replay sx={{ marginRight: 0.5 }} />
        Reset
      </Button>
      <Button variant="contained" onClick={saveYaml}>
        <SaveAlt sx={{ marginRight: 0.5 }} />
        Export
      </Button>
    </Stack>
  );
}
