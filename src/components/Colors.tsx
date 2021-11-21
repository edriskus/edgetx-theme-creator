import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useColors } from "../utils/Theme";
import Picker from "./Picker";

const categories = {
  Primary: {
    PRIMARY1: "Primary 1",
    PRIMARY2: "Primary 2",
    PRIMARY3: "Primary 3",
  },
  Secondary: {
    SECONDARY1: "Secondary 1",
    SECONDARY2: "Secondary 2",
    SECONDARY3: "Secondary 3",
  },
  State: {
    FOCUS: "Focus",
    EDIT: "Edit",
    ACTIVE: "Active",
    WARNING: "Warning",
    DISABLED: "Disabled",
  },
};

export default function Colors() {
  const colors = useColors();
  return (
    <Box>
      {Object.entries(categories).map(([label, category]) => (
        <Box key={label}>
          <Typography variant="caption" color="textSecondary">
            {label}
          </Typography>
          <Grid
            container
            spacing={1}
            marginBottom={1}
            direction="row"
            flexWrap="wrap"
          >
            {Object.entries(category).map(([key, title]) => (
              <Grid item xs="auto" key={key}>
                <Picker name={key} value={(colors as any)[key]} title={title} />
              </Grid>
            ))}
          </Grid>
        </Box>
      ))}
    </Box>
  );
}
