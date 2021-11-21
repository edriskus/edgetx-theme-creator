import { Replay } from "@mui/icons-material";
import { IconButton, Stack, Tooltip } from "@mui/material";
import { Box } from "@mui/system";
import { useSaveYaml } from "../utils/Save";
import { useResetTheme } from "../utils/Theme";
import HowToInstall from "./HowToInstall";
import Import from "./Import";

interface Props {
  saveBackground(): void;
  hasBackground: boolean;
}

export default function Export({ saveBackground, hasBackground }: Props) {
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
      <HowToInstall
        saveYml={saveYaml}
        saveBackground={saveBackground}
        hasBackground={hasBackground}
      />
    </Stack>
  );
}
