import { Box } from "@mui/system";
import { PropsWithChildren } from "react";
import { useColors } from "../utils/Theme";

interface Props {
  title: string;
}

export default function Preference({
  title,
  children,
}: PropsWithChildren<Props>) {
  const { PRIMARY1 } = useColors();
  return (
    <Box
      display="flex"
      padding="2px"
      paddingX="4px"
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
    >
      <Box width="50%" style={{ color: PRIMARY1 }}>
        {title}
      </Box>
      <Box width="50%">{children}</Box>
    </Box>
  );
}
