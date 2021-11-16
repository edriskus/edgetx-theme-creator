import { Box } from "@mui/system";
import { useColors } from "../utils/Theme";

export default function Navbar() {
  const { SECONDARY1 } = useColors();
  return (
    <Box sx={{ backgroundColor: SECONDARY1 }} width="100%" height="17%"></Box>
  );
}
