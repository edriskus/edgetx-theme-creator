import { Box } from "@mui/system";
import { PropsWithChildren } from "react";
import { useColors } from "../utils/Theme";

export default function Dropdown({
  children,
  edit,
}: PropsWithChildren<{ edit?: true }>) {
  const { PRIMARY2, SECONDARY1, SECONDARY2, EDIT } = useColors();
  return (
    <Box
      sx={{
        paddingX: "4px",
        backgroundColor: edit ? EDIT : PRIMARY2,
        color: edit ? PRIMARY2 : SECONDARY1,
        border: `1px solid ${SECONDARY2}`,
      }}
    >
      {children}
    </Box>
  );
}
