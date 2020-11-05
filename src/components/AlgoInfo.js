import React, {useContext, useRef} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import { DataContext } from "../DataContext";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function AlgoInfo() {
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
    algoDetails, 
    setAlgoDetails,
  ] = useContext(DataContext);

  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  // const algoRef = useRef(algo);
  // algoRef.current = algo;

  return (
    <Card className={classes.root}>
      <CardContent>
        {/* <Typography className={classes.title} color="textSecondary" gutterBottom>
          Algorithm
        </Typography> */}
        <Typography variant="h5" component="h2">
        {algoDetails[algo].name}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          Algorithm
        </Typography>
        <Typography variant="body2" component="p">
        {algoDetails[algo].info}
        {/* {console.log(algoRef, algoDetails)} */}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" target="_blank" href="https://www.geeksforgeeks.org/quick-sort/">Learn More</Button>
      </CardActions>
    </Card>
  );
}