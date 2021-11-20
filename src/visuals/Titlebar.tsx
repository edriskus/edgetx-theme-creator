import { Box } from "@mui/system";
import { useColors } from "../utils/Theme";

interface Props {
  title: string;
}

export default function Titlebar({ title }: Props) {
  const { PRIMARY2, SECONDARY1 } = useColors();
  return (
    <Box
      sx={{
        marginTop: "3px",
        color: PRIMARY2,
        backgroundColor: SECONDARY1,
        alignItems: "center",
        display: "flex",
        flexDirection: "row",
      }}
      padding={1}
      paddingY={1.5}
      width="100%"
      height="15px"
    >
      {title}
    </Box>
  );
}
