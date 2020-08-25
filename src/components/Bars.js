import React, { useContext, useEffect } from "react";
import { DataContext } from "../DataContext";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

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
  barsContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-end",
    height: "420px",
    width: "90%",
    margin: "auto",
  },
}));

export default function Bars() {
  const [length, setLength, array, setArray, ogArray, setOgArray] = useContext(
    DataContext
  );
  const classes = useStyles();

  const makeArray = () => {
    const newArray = Array.from(Array(length), () =>
      Math.floor(Math.random() * 400)
    );

    setArray(newArray);
    setOgArray(newArray);
  };

  useEffect(() => {
    makeArray();
  }, [length]);

  return (
    <Grid className={classes.barsContainer}>
      {array.map((height, index) => {
        return (
          <div
            key={index}
            className="bar"
            style={{
              margin: "2px",
              width: "20px",
              height: `${height}px`,
              backgroundColor: "turquoise",
              borderRadius: "20px 20px 0 0",
            }}
          ></div>
        );
      })}
    </Grid>
  );
}
