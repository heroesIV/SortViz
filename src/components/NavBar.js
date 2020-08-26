import { Slider, Button, Typography, Grid, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { DataContext } from "../DataContext";
import React, { useContext } from "react";
import SimpleMenu from "./SimpleMenu";

const useStyles = makeStyles((theme) => ({
  buttonStyles: {
    marginBottom: "10px",
  },
  sliderContainer: {
    padding: theme.spacing(1),
    paddingBottom: 0,
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
  algoPaper: {},
}));

export default function NavBar({
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
    algo,
    setAlgo,
    sorted,
    setSorted,
  ] = useContext(DataContext);
  return (
    <Grid container className={classes.sliderContainer} spacing={2}>
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
      <Grid item xs={12} sm={6} className={classes.sliderItem}>
        <Paper className={classes.algoPaper}>
          <SimpleMenu styles={classes.buttonStyles} />
          {/* <Button
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
          </Button> */}
          {/* <Button
            onClick={() => {
              setRunning(!running);
            }}
            className={classes.buttonStyles}
            disabled={!disable}
            color="primary"
          >
            {running ? "PAUSE" : "PLAY"}
          </Button> */}
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
  );
}
