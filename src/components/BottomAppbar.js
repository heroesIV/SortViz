import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, Fab } from "@material-ui/core";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import PauseIcon from "@material-ui/icons/Pause";
import { DataContext } from "../DataContext";

const useStyles = makeStyles((theme) => ({
  text: {
    padding: theme.spacing(2, 2, 0),
  },
  paper: {
    paddingBottom: 50,
  },
  list: {
    marginBottom: theme.spacing(2),
  },
  subheader: {
    backgroundColor: theme.palette.background.paper,
  },
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
}));

export default function BottomAppbar({ handlePause }) {
  const classes = useStyles();
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
    disable2,
  ] = useContext(DataContext);

  return (
    <>
      <Toolbar />
      <AppBar position="fixed" color="primary" className={classes.appBar}>
        <Toolbar>
          <Fab
            color="secondary"
            aria-label="add"
            className={classes.fabButton}
            onClick={handlePause}
          >
            {running ? <PauseIcon /> : <PlayArrowIcon />}
          </Fab>
          <div className={classes.grow} />
        </Toolbar>
      </AppBar>
    </>
  );
}
