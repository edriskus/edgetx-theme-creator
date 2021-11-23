import { Replay } from "@mui/icons-material";
import { IconButton, Stack, Tooltip } from "@mui/material";
import { Box } from "@mui/system";
import { useSaveYaml, useSaveZip } from "../utils/Save";
import { useResetTheme } from "../utils/Theme";
import HowToInstall from "./HowToInstall";
import Import from "./Import";

interface Props {
  saveBackground(): void;
  background?: string | null;
}

export default function Export({ saveBackground, background }: Props) {
  const saveYaml = useSaveYaml();
  const saveZip = useSaveZip(background);
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
      <HowToInstall
        saveYml={saveYaml}
        saveZip={saveZip}
        saveBackground={saveBackground}
        hasBackground={!!background}
      />
    </Stack>
  );
}
