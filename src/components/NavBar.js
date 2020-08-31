import { Slider, Button, Typography, Grid, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { DataContext } from "../DataContext";
import React, { useContext, useState } from "react";

import AlgoDialog from "./AlgoDialog";

const useStyles = makeStyles((theme) => ({
  buttonStyles: {
    margin: "10px",
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
  algoPaper: {
    height: "100%",
  },
}));

export default function NavBar({
  handleQuickSort,
  handleBubbleSort,
  handleReset,
  handleReverse,
}) {
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
    algo,
    setAlgo,
    sorted,
    setSorted,
  ] = useContext(DataContext);

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
        <Paper
          className={classes.algoPaper}
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
          spacing={2}
        >
          <Grid
            item
            xs={6}
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <Button
              aria-controls="simple-menu"
              aria-haspopup="true"
              onClick={handleClickOpen}
              color="primary"
              disabled={sorted || disable}
              className={classes.buttonStyles}
            >
              {algo ? algo : "Select Algorithm"}
            </Button>
            <AlgoDialog
              selectedValue={selectedValue}
              open={open}
              onClose={handleClose}
              setAlgo={setAlgo}
            />
          </Grid>
          <Grid
            item
            xs={6}
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <Grid
              item
              xs={5}
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
              }}
            >
              <Button
                onClick={handleReset}
                disabled={disable}
                className={classes.buttonStyles}
                color="primary"
              >
                Reset
              </Button>
            </Grid>
            <Grid
              item
              xs={7}
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
              }}
            >
              <Button
                onClick={handleReverse}
                disabled={disable}
                className={classes.buttonStyles}
                color="primary"
              >
                Reverse
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
}
