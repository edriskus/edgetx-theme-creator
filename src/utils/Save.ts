import { useCallback, useContext } from "react";
import { ThemeContext } from "./Theme";
import YAML from "yaml";
import { saveAs } from "file-saver";

export function useSaveYaml() {
  const { theme } = useContext(ThemeContext);
  return useCallback(() => {
    const text = YAML.stringify(theme).replace(
      /"#(.+)"/g,
      (_, m1) => "0x" + m1.toUpperCase()
    );
    const file = new Blob([text]);
    saveAs(file, theme.summary?.name + ".yml");
  }, [theme]);
}
