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

const useStyles = makeStyles((theme) => ({
  appBar: {
    top: 0,
    bottom: "auto",
  },
}));

export default function Appbar() {
  const classes = useStyles();
  return (
    <Grid container>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Grid item xs={12}>
            <Typography align="center" variant="h5">
              SortViz
            </Typography>
          </Grid>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </Grid>
  );
}
