import React, { useContext, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  AppBar,
  Toolbar,
  Fab,
  Typography,
  Grid,
  Link,
} from "@material-ui/core";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import PauseIcon from "@material-ui/icons/Pause";
import { DataContext } from "../DataContext";
import GitHubIcon from "@material-ui/icons/GitHub";

import AlgoDialog from "./AlgoDialog";

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

  const [open, setOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState("Select Algo");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
    setSelectedValue(value);
  };

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
            // onClick={handlePause}
            onClick={algo === "" ? handleClickOpen : handlePause}
            disabled={sorted}
          >
            {running ? <PauseIcon /> : <PlayArrowIcon />}
          </Fab>
          <AlgoDialog
            selectedValue={selectedValue}
            open={open}
            onClose={handleClose}
            setAlgo={setAlgo}
          />

          <div className={classes.grow} />

          <Grid
            container
            direction="row"
            alignItems="center"
            justify="flex-end"
            spacing={1}
          >
            <Grid item>
              <Link
                href="https://github.com/heroesIV"
                color="inherit"
                underline="none"
              >
                <GitHubIcon fontSize="small" />
              </Link>
            </Grid>
            <Grid item>
              <Link
                href="https://github.com/heroesIV"
                color="inherit"
                underline="none"
              >
                heroesIV
              </Link>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </>
  );
}
