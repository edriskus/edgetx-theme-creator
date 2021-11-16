import { Avatar, Chip, Popover } from "@mui/material";
import { Box } from "@mui/system";
import { useCallback, useState, MouseEvent } from "react";
import { ColorChangeHandler, SketchPicker } from "react-color";
import { useColorChange } from "../utils/Theme";

interface Props {
  name: string;
  value: string;
  title: string;
}

export default function Picker({ name, value, title }: Props) {
  const [anchor, setAnchor] = useState<HTMLButtonElement>();
  const handleOpen = useCallback(
    (event: MouseEvent<HTMLButtonElement>) => setAnchor(event.currentTarget),
    []
  );
  const handleClose = useCallback(() => setAnchor(undefined), []);
  const onColorChange = useColorChange();
  const handleChange: ColorChangeHandler = useCallback(
    (value) => onColorChange(name, value.hex),
    [name, onColorChange]
  );
  return (
    <Box>
      <Chip
        size="small"
        avatar={<Avatar sx={{ backgroundColor: value }}>&nbsp;</Avatar>}
        label={title}
        onClick={handleOpen}
        component="button"
      />
      <Popover
        open={!!anchor}
        anchorEl={anchor}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <SketchPicker color={value} onChange={handleChange} />
      </Popover>
    </Box>
  );
}
