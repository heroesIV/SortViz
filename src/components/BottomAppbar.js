import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, Fab, Typography, Grid } from "@material-ui/core";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import PauseIcon from "@material-ui/icons/Pause";
import { DataContext } from "../DataContext";
import GitHubIcon from "@material-ui/icons/GitHub";

const useStyles = makeStyles((theme) => ({
  appBar: {
    top: "auto",
    bottom: 0,
  },
  grow: {
    flexGrow: 1,
  },
  fabButton: {
    position: "absolute",
    zIndex: 1,
    top: -30,
    left: 0,
    right: 0,
    margin: "0 auto",
  },
  typgraphyStyles: {
    flex: 1,
    wordSpacing: "15px",
  },
}));

export default function BottomAppbar({ handlePause }) {
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
    <>
      <Toolbar />
      <AppBar
        position="fixed"
        className={classes.appBar}
        color={darkMode ? "inherit" : "primary"}
      >
        <Toolbar>
          <Fab
            color="secondary"
            aria-label="add"
            className={classes.fabButton}
            onClick={handlePause}
            disabled={sorted}
          >
            {running ? <PauseIcon /> : <PlayArrowIcon />}
          </Fab>

          <div className={classes.grow} />
          <Grid container spacing={2}>
            <Grid item xs={8} />
            <Grid item xs={1}>
              <GitHubIcon fontSize="small" />
            </Grid>
            <Grid item xs={3}>
              <Typography className={classes.typgraphyStyles}>
                heroesIV
              </Typography>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </>
  );
}
