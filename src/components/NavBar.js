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
  buttonStyles: {
    margin: "10px",
  },
  sliderContainer: {
    padding: theme.spacing(1),
    margin: "auto",
    textAlign: "center",
    fontWeight: "500",
    fontSize: "14px",
  },
  sliderItem: {
    // padding: theme.spacing(2),
  },
  sliderTypoStyles: {
    fontSize: "0.875rem",
    fontWeight: "500",
  },
  paperStyle: {
    padding: theme.spacing(2),
  },
}));

export default function NavBar({
  handlePause,
  handleQuickSort,
  handleBubbleSort,
  handleReset,
  handleReverse,
}) {
  const classes = useStyles();
  // console.log(props);
  // console.log(handlePause);
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
    setDisable2,
  ] = useContext(DataContext);
  return (
    <Grid container>
      <Grid
        xs={0}
        sm={0}
        container
        className={classes.sliderContainer}
        spacing={2}
      >
        <Grid item xs={6} sm={3} className={classes.sliderItem}>
          <Paper className={classes.paperStyle}>
            <Typography
              gutterBottom
              color="primary"
              className={classes.sliderTypoStyles}
            >
              SIZE
            </Typography>
            <Slider
              value={length}
              onChange={(e, newValue) => {
                e.preventDefault();
                setLength(newValue);
              }}
              aria-labelledby="continuous-slider"
              min={2}
              max={80}
              // valueLabelDisplay="auto"
              disabled={disable}
            />
          </Paper>
        </Grid>
        <Grid item xs={6} sm={3} className={classes.sliderItem}>
          <Paper className={classes.paperStyle}>
            <Typography
              id="continuous-slider"
              gutterBottom
              color="primary"
              className={classes.sliderTypoStyles}
            >
              SPEED
            </Typography>
            <Slider
              value={speed}
              onChange={(e, newValue) => {
                e.preventDefault();
                setSpeed(newValue);
              }}
              aria-labelledby="continuous-slider"
              min={2}
              max={200}
              // valueLabelDisplay="auto"
            />
          </Paper>
        </Grid>
        <Grid item xs={0} sm={6} className={classes.sliderItem}>
          <Paper style={{ height: "100%" }}>
            <Button
              onClick={handleQuickSort}
              disabled={disable2}
              className={classes.buttonStyles}
              color="primary"
            >
              Quick Sort
            </Button>
            <Button
              onClick={handleBubbleSort}
              disabled={disable2}
              className={classes.buttonStyles}
              color="primary"
            >
              Bubble Sort
            </Button>
            <Button
              onClick={handlePause}
              className={classes.buttonStyles}
              disabled={!disable}
              color="primary"
            >
              {running ? "PAUSE" : "PLAY"}
            </Button>
            <Button
              onClick={handleReset}
              disabled={disable}
              className={classes.buttonStyles}
              color="primary"
            >
              Reset
            </Button>
            <Button
              onClick={handleReverse}
              disabled={disable}
              className={classes.buttonStyles}
              color="primary"
            >
              Reverse
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </Grid>
  );
}
