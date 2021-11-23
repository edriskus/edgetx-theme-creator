import { useCallback, useContext } from "react";
import { EdgeTxTheme, ThemeContext } from "./Theme";
import YAML from "yaml";
import { saveAs } from "file-saver";
import JSZip from "jszip";
import { cropImg } from "./Crop";

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

async function saveZip(
  theme: Partial<EdgeTxTheme>,
  background?: string | null
) {
  const zip = new JSZip();
  const text =
    "---\n" +
    YAML.stringify(theme).replace(
      /"#(.+)"/g,
      (_, m1) => "0x" + m1.toUpperCase()
    );
  const folder = zip.folder(theme.summary?.name ?? "theme");
  folder?.file("theme.yml", text);
  if (background != null) {
    const picture = await cropImg(background);
    if (picture) {
      folder?.file("background_480x272.png", picture);
    }
  }
  const content = await zip.generateAsync({ type: "blob" });
  saveAs(content, (theme.summary?.name ?? "theme") + ".zip");
}

export function useSaveZip(background?: string | null) {
  const { theme } = useContext(ThemeContext);
  return useCallback(() => {
    saveZip(theme, background);
  }, [theme, background]);
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
