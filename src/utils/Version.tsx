import {
  createContext,
  PropsWithChildren,
  useContext,
  useMemo,
  useState,
} from "react";

export type Version = "2.5" | "2.6";

const defaultVersion: Version = "2.5";

interface VersionContextBundle {
  version: Version;
  setVersion(version: Version): void;
}

export const VersionContext = createContext<VersionContextBundle>({
  version: defaultVersion,
  setVersion: () => {},
});

export const VersionContextProvider = ({ children }: PropsWithChildren<{}>) => {
  const [version, setVersion] = useState<Version>(defaultVersion);
  const bundle: VersionContextBundle = useMemo(
    () => ({
      version,
      setVersion,
    }),
    [version, setVersion]
  );
  return (
    <VersionContext.Provider value={bundle}>{children}</VersionContext.Provider>
  );
};

export const useVersion = () => useContext(VersionContext).version;

export const useSetVersion = () => useContext(VersionContext).setVersion;
