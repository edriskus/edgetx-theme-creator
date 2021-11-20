import { useCallback, useContext } from "react";
import { ThemeContext } from "./Theme";
import YAML from "yaml";
import { saveAs } from "file-saver";

export function useSaveYaml() {
  const { theme } = useContext(ThemeContext);
  return useCallback(() => {
    const text =
      "---\n" +
      YAML.stringify(theme).replace(
        /"#(.+)"/g,
        (_, m1) => "0x" + m1.toUpperCase()
      );
    const file = new Blob([text]);
    saveAs(file, theme.summary?.name + ".yml");
  }, [theme]);
}

const getValues = (obj?: any, keys: string[] = []) =>
  keys.reduce((acc, key) => {
    acc[key] = obj?.[key];
    return acc;
  }, {} as Record<string, any>);

const modifyHexes = (obj?: any) => {
  return Object.entries(obj).reduce((acc, [key, value]) => {
    const hex =
      "#" + (+(value as any)).toString(16).padStart(6, "0").toUpperCase();
    acc[key] = hex;
    return acc;
  }, {} as Record<string, any>);
};

export function useOpenYaml() {
  const { onPrefill } = useContext(ThemeContext);
  return useCallback(
    (fileContent: string) => {
      const content = YAML.parse(fileContent);
      const values = {
        summary: getValues(content.summary, ["name", "author", "info"]),
        colors: modifyHexes(
          getValues(content.colors, [
            "PRIMARY1",
            "PRIMARY2",
            "PRIMARY3",
            "SECONDARY1",
            "SECONDARY2",
            "SECONDARY3",
            "FOCUS",
            "EDIT",
            "ACTIVE",
            "WARNING",
            "DISABLED",
          ])
        ),
      };
      onPrefill(values as any);
    },
    [onPrefill]
  );
}
