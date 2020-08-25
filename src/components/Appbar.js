import {
  Slider,
  Button,
  Typography,
  Grid,
  AppBar,
  Toolbar,
  Paper,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { DataContext } from "../DataContext";
import React, { useContext } from "react";

export default function Appbar() {
  return (
    <Grid container>
      <AppBar position="static">
        <Toolbar>
          <Grid item xs={3}>
            <Typography variant="h5">SortViz</Typography>
          </Grid>
        </Toolbar>
      </AppBar>
    </Grid>
  );
}
