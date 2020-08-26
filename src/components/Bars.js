import React, { useContext, useEffect } from "react";
import { DataContext } from "../DataContext";
import { Grid, Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  buttonStyles: {
    margin: "10px",
  },
  sliderContainer: {
    padding: theme.spacing(1),
    paddingTop: 0,
    margin: "auto",
    width: "100%",
    marginBottom: "5%",
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
    maxHeight: "100%",
    overflow: "auto",
  },
  paperStyle1: {
    padding: theme.spacing(2),
    height: "360px",
    overflow: "auto",
  },
  barsContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-end",
    height: "360px",
    // width: "90%",
    margin: "auto",
    // padding: theme.spacing(2),
  },
  bar: {
    margin: "2px",
    width: "20px",
    backgroundColor: theme.palette.primary.main,
    borderRadius: "20px 20px 0 0",
  },
  infoContainer: {
    // height: "360px",
    padding: theme.spacing(1),
    // margin: "auto",
  },
  info: {
    // height: "340px",
    // margin: theme.spacing(1),
  },
}));

export default function Bars() {
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
  ] = useContext(DataContext);
  const classes = useStyles();

  return (
    <Grid container className={classes.sliderContainer} spacing={2}>
      <Grid item xs={12} sm={6}>
        <Paper className={classes.paperStyle}>
          <Grid className={classes.barsContainer}>
            {array.map((height, index) => {
              return (
                <Grid
                  item
                  className={`${classes.bar} bar`}
                  key={index}
                  style={{
                    height: `${height}px`,
                  }}
                ></Grid>
              );
            })}
          </Grid>
        </Paper>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Paper className={classes.paperStyle1}>
          <Grid container className={classes.infoContainer} spacing={2}>
            <Typography className={classes.info}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
              voluptates eligendi aliquam neque voluptas tempore. Aliquid omnis
              perspiciatis nesciunt quod aut pariatur, distinctio cum cumque,
              quas accusamus dolorum ipsam libero! Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Adipisci consequatur impedit
              accusamus cumque dolorem accusantium quisquam suscipit sit iusto.
              Accusamus, explicabo, maiores commodi a ipsa voluptatem omnis
              adipisci aspernatur optio quo officiis velit repellendus neque,
              suscipit saepe veniam ex! Ullam, laboriosam. Doloremque incidunt
              iusto facilis sapiente iure quibusdam perspiciatis sed? Accusamus
              sed ut temporibus Lorem ipsum dolor sit amet consectetur Lorem
              ipsum dolor sit, amet consectetur adipisicing elit. Voluptate
              ipsam, eum, libero nostrum ab officiis illum amet sapiente
              aspernatur eaque itaque aut ut quia, doloribus ratione. Impedit
              minus consequatur, nam, sunt nesciunt rerum quas perspiciatis
              maxime illum autem laudantium sequi ipsa, quia molestiae? Minus
              iste dolor temporibus. Culpa quidem, doloremque perferendis nulla
              amet autem sint corporis quam dolorem quos reprehenderit voluptate
              modi nemo debitis, optio consectetur placeat voluptates ex rem?
              Suscipit architecto quidem sed ad minus esse ipsam ipsum? Iure
              modi architecto sed temporibus eius corrupti, suscipit quidem
              voluptatum est neque consequuntur unde beatae odit cum numquam
              dignissimos rem alias? adipisicing elit.
            </Typography>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
}
