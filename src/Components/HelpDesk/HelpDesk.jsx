import * as React from "react";
import Card from "@mui/material/Card";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import CardContent from "@mui/material/CardContent";
import { Grid } from "@mui/material";

export default function HelpDesk() {
  return (
    <div>
      <Grid container>
        <Grid xs={4}>
          <Card variant="outlined" align="center">
            <CardContent>Contact Us Form</CardContent>
          </Card>
        </Grid>
        <Grid xs={4}>
          <Card variant="outlined" align="center">
            <CardContent>Manage Your Privacy</CardContent>
          </Card>
        </Grid>
        <Grid xs={4}>
          <Card variant="outlined" align="center">
            <CardContent>FAQs</CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}
