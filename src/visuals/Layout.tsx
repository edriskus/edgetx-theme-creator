import { Box } from "@mui/system";
import image from "../assets/ETX_bg_480x272.png";
import {
  PropsWithChildren,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
  RefObject,
} from "react";

const WIDTH = 480;
const HEIGHT = 272;

interface Props {
  background?: string | null;
  screenshotRef?: RefObject<HTMLDivElement>;
}

export default function Layout({
  background,
  children,
  screenshotRef,
}: PropsWithChildren<Props>) {
  const ref = useRef<HTMLDivElement>(null);
  const [percent, setPercent] = useState(1);

  useLayoutEffect(() => {
    const listener = () => {
      const calculatedPercent = (ref.current?.clientWidth ?? WIDTH) / 480;
      setPercent(calculatedPercent);
    };
    window.addEventListener("resize", listener);
    listener();
    return () => window.removeEventListener("resize", listener);
  }, []);

  const calculatedHeight = useMemo(() => HEIGHT * percent, [percent]);
  return (
    <Box ref={ref} height={calculatedHeight} maxWidth="100%">
      <Box
        ref={screenshotRef}
        position="relative"
        width={WIDTH}
        height={HEIGHT}
        sx={{
          backgroundImage: `url(${background ?? image})`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
          overflow: "hidden",
          transform: `scale(${percent * 100}%)`,
          transformOrigin: "top left",
        }}
      >
        {children}
      </Box>
    </Box>
  );
}
