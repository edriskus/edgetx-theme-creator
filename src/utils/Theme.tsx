import {
  createContext,
  PropsWithChildren,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";

export interface Colors {
  PRIMARY1: string;
  PRIMARY2: string;
  PRIMARY3: string;
  SECONDARY1: string;
  SECONDARY2: string;
  SECONDARY3: string;
  FOCUS: string;
  EDIT: string;
  ACTIVE: string;
  WARNING: string;
  DISABLED: string;
}

interface Summary {
  name: string;
  author: string;
  info: string;
}

interface EdgeTxTheme {
  summary: Summary;
  colors: Colors;
}

const defaultTheme: EdgeTxTheme = {
  summary: {
    name: "EdgeTX",
    author: "EdgeTX Team",
    info: "The EdgeTX default colors",
  },
  colors: {
    PRIMARY1: "#000000",
    PRIMARY2: "#FFFFFF",
    PRIMARY3: "#0C3F66",
    SECONDARY1: "#125E99",
    SECONDARY2: "#B6E0F2",
    SECONDARY3: "#E4EEF2",
    FOCUS: "#14A1E5",
    EDIT: "#009909",
    ACTIVE: "#FFDE00",
    WARNING: "#E00000",
    DISABLED: "#8C8C8C",
  },
};

export const ThemeContext = createContext<{
  theme: Partial<EdgeTxTheme>;
  onColorChange(name: string, value: string): void;
  onSummaryChange(name: string, value: string): void;
  onReset(): void;
}>({
  theme: defaultTheme,
  onColorChange: () => {},
  onSummaryChange: () => {},
  onReset: () => {},
});

export const ThemeContextProvider = ({ children }: PropsWithChildren<{}>) => {
  const [theme, setTheme] = useState<Partial<EdgeTxTheme>>(defaultTheme);
  const handleColorChange = useCallback((name: string, value: string) => {
    setTheme((theme: Partial<EdgeTxTheme>) => ({
      ...theme,
      colors: {
        ...(theme.colors ?? {}),
        [name]: value,
      } as Colors,
    }));
  }, []);
  const handleSummaryChange = useCallback((name: string, value: string) => {
    setTheme((theme: Partial<EdgeTxTheme>) => ({
      ...theme,
      summary: {
        ...(theme.summary ?? {}),
        [name]: value,
      } as Summary,
    }));
  }, []);
  const handleReset = useCallback(() => setTheme(defaultTheme), []);
  const bundle = useMemo(
    () => ({
      theme,
      onColorChange: handleColorChange,
      onSummaryChange: handleSummaryChange,
      onReset: handleReset,
    }),
    [theme, handleColorChange, handleSummaryChange, handleReset]
  );
  return (
    <ThemeContext.Provider value={bundle}>{children}</ThemeContext.Provider>
  );
};

export const useColors = (): Partial<Colors> =>
  useContext(ThemeContext).theme.colors ?? {};

export const useSummary = (): Partial<Summary> =>
  useContext(ThemeContext).theme.summary ?? {};

export const useColorChange = () => useContext(ThemeContext).onColorChange;

export const useSummaryChange = () => useContext(ThemeContext).onSummaryChange;

export const useResetTheme = () => useContext(ThemeContext).onReset;
