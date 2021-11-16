import { Stack, TextField, TextFieldProps } from "@mui/material";
import { ChangeEvent, useCallback } from "react";
import { useSummary, useSummaryChange } from "../utils/Theme";

export default function Summary() {
  const { name, author, info } = useSummary();
  const onSummaryChange = useSummaryChange();
  const handleChange = useCallback(
    (key: string) => (event: ChangeEvent<HTMLInputElement>) => {
      onSummaryChange(key, event.target.value);
    },
    [onSummaryChange]
  );
  const commonProps: TextFieldProps = {
    fullWidth: true,
    size: "small",
  };
  return (
    <Stack spacing={2} width="100%">
      <TextField
        label="Name"
        value={name}
        onChange={handleChange("name")}
        {...commonProps}
      />
      <TextField
        label="Author"
        value={author}
        onChange={handleChange("author")}
        {...commonProps}
      />
      <TextField
        label="Info"
        multiline
        value={info}
        onChange={handleChange("info")}
        {...commonProps}
      />
    </Stack>
  );
}
