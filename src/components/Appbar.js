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
import Brightness4Icon from "@material-ui/icons/Brightness4";
import IconButton from "@material-ui/core/IconButton";

const useStyles = makeStyles((theme) => ({
  appBar: {
    top: 0,
    bottom: "auto",
  },
  typgraphyStyles: {
    flex: 1,
  },
}));

export default function Appbar() {
  const [
    length,
    setLength,
    array,
    setArray,
    ogArray,
    setOgArray,
    speed,
    setSpeed,
    running,
    setRunning,
    disable,
    setDisable,
    algo,
    setAlgo,
    sorted,
    setSorted,
    darkMode,
    setDarkMode,
  ] = useContext(DataContext);
  const classes = useStyles();
  return (
    <Grid container>
      <AppBar
        position="fixed"
        className={classes.appBar}
        color={darkMode ? "inherit" : "primary"}
      >
        <Toolbar>
          <Typography
            // align="center"
            variant="h4"
            className={classes.typgraphyStyles}
          >
            SortViz
          </Typography>
          <IconButton
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={() => {
              setDarkMode(!darkMode);
            }}
          >
            <Brightness4Icon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </Grid>
  );
}
