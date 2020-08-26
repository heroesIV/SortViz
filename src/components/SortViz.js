import React, { useContext, useRef, useEffect } from "react";
import { DataContext } from "../DataContext";
import Bars from "./Bars";
import { getBubbleSortAnimations } from "../sortingAlgorithms/BubbleSort";
import { getQuickSortAnimations } from "../sortingAlgorithms/QuickSort";
import BottomAppbar from "./BottomAppbar";

import NavBar from "./NavBar";
import theme from "../Theme";

import { Grid } from "@material-ui/core";

export default function SortViz() {
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
  ] = useContext(DataContext);

  useEffect(() => {
    handleReset();
  }, [length]);

  const { primary, secondary } = theme.palette;
  // console.log(primary.main);

  const speedRef = useRef(speed);
  speedRef.current = speed;

  const runningRef = useRef(running);
  runningRef.current = running;

  const handleReset = () => {
    setRunning(false);
    setDisable2(false);

    const arrayBars = document.querySelectorAll(".bar");

    for (let i = 0; i < arrayBars.length; i++) {
      const barStyle = arrayBars[i].style;
      barStyle.height = `${ogArray[i]}px`;
      barStyle.backgroundColor = primary.main;
    }
    setArray(ogArray);
  };

  const handleReverse = () => {
    setRunning(false);
    setDisable2(false);
    const arrayBars = document.querySelectorAll(".bar");
    let revArray = [...array];
    revArray = revArray.sort((a, b) => {
      return b - a;
    });
    for (let i = 0; i < arrayBars.length; i++) {
      const barStyle = arrayBars[i].style;
      barStyle.height = `${revArray[i]}px`;
      barStyle.backgroundColor = primary.main;
    }
    setArray(revArray);
  };

  // useEffect(() => {
  //   handleStart();
  // }, [algo]);

  // const handleStart = () => {
  //   if (algo === "Bubble Sort") {
  //     handleBubbleSort();
  //   } else if (algo === "Quick Sort") {
  //     handleQuickSort();
  //   } else return;
  // };

  const handlePause = () => {
    if (running === false) {
      if (algo === "Bubble Sort") {
        handleBubbleSort();
      } else if (algo === "Quick Sort") {
        handleQuickSort();
      } else alert("select algo");
    } else {
      setRunning(!running);
    }
  };

  const handleBubbleSort = () => {
    setRunning(true);
    // setDisable(true);
    // setDisable2(true);

    const [sortedArray, animations] = getBubbleSortAnimations(array);

    let intervalId = setInterval(() => {
      if (!runningRef.current) return;
      handleAnimation(animations.shift(), animations, intervalId);
    }, 2000 / speedRef.current);
  };

  const handleQuickSort = () => {
    setRunning(true);
    // setDisable(true);
    // setDisable2(true);

    // if (!runningRef.current) return;

    const [sortedArray, animations] = getQuickSortAnimations(array);
    let sorted = [];

    let intervalId = setInterval(() => {
      if (!runningRef.current) return;
      handleAnimation(animations.shift(), animations, intervalId, sorted);
    }, 2000 / speedRef.current);
  };

  const handleAnimation = (animation, animations, intervalId, sorted) => {
    clearInterval(intervalId);
    intervalId = setInterval(() => {
      if (!runningRef.current) return;
      handleAnimation(animations.shift(), animations, intervalId, sorted);
    }, 2000 / speedRef.current);

    const arrayBars = document.querySelectorAll(".bar");
    if (animation === undefined) {
      clearInterval(intervalId);
      setRunning(false);
      setDisable(false);
      for (let i = 0; i < arrayBars.length; i++) {
        const barStyle = arrayBars[i].style;
        barStyle.backgroundColor = "lightgreen";
      }
      return;
    }
    const [code, idx1, idx2, oldHeight, newHeight] = animation;

    if (code === "pivot") {
      const pivotIndex = idx1;
      const barStyle = arrayBars[pivotIndex].style;
      barStyle.backgroundColor = "blue";

      for (let i = 0; i < pivotIndex; i++) {
        const barStyle = arrayBars[i].style;
        barStyle.backgroundColor = "lightgreen";
        sorted.push(i);
      }
    }
    if (code === "select") {
      const selectIndex = idx1;
      if (idx2 !== undefined) {
        const barStyle = arrayBars[idx2].style;
        barStyle.backgroundColor = "yellow";
      }
      const barStyle = arrayBars[selectIndex].style;
      barStyle.backgroundColor = "yellow";
    }
    if (code === "deselect") {
      const selectIndex = idx1;
      const barStyle = arrayBars[selectIndex].style;
      if (idx2 !== undefined) {
        const barStyle = arrayBars[idx2].style;
        barStyle.backgroundColor = primary.main;
      }
      barStyle.backgroundColor = primary.main;
    }
    if (code === "smaller") {
      const selectIndex = idx1;
      const barStyle = arrayBars[selectIndex].style;
      barStyle.backgroundColor = "pink";
    }
    if (code === "swap1") {
      const bar1Style = arrayBars[idx1].style;
      const bar2Style = arrayBars[idx2].style;
      bar1Style.height = `${newHeight}px`;
      bar2Style.height = `${oldHeight}px`;
      bar1Style.backgroundColor = "pink";
      bar2Style.backgroundColor = primary.main;
    }
    if (code === "swap2") {
      const bar1Style = arrayBars[idx1].style;
      const bar2Style = arrayBars[idx2].style;
      bar1Style.height = `${newHeight}px`;
      bar2Style.height = `${oldHeight}px`;
      sorted.push(idx1);
      for (let i = 0; i < arrayBars.length; i++) {
        // this is erasing the pivots that were earlier sorted SOLVED
        if (sorted.includes(i) === false) {
          const barStyle = arrayBars[i].style;
          barStyle.backgroundColor = primary.main;
        }
      }
      bar1Style.backgroundColor = "lightgreen";
    }
    if (code === "swap3") {
      const bar1Style = arrayBars[idx1].style;
      const bar2Style = arrayBars[idx2].style;
      bar1Style.height = `${newHeight}px`;
      bar2Style.height = `${oldHeight}px`;
      if (sorted.includes(idx1) === false)
        bar1Style.backgroundColor = primary.main;
      else bar1Style.backgroundColor = "lightgreen";
      bar2Style.backgroundColor = "blue";
    }
    if (code === "swap4") {
      const bar1Style = arrayBars[idx1].style;
      const bar2Style = arrayBars[idx2].style;
      bar1Style.height = `${newHeight}px`;
      bar2Style.height = `${oldHeight}px`;
      bar1Style.backgroundColor = "red";
      bar2Style.backgroundColor = "red";
    }
    if (code === "sorted") {
      const barStyle = arrayBars[idx1].style;
      barStyle.backgroundColor = "lightgreen";
    }
  };
  return (
    <div>
      <Grid container spacing={0}>
        <NavBar
          handleQuickSort={handleQuickSort}
          handleBubbleSort={handleBubbleSort}
          handleReset={handleReset}
          handleReverse={handleReverse}
        />
        <Bars />
        <BottomAppbar handlePause={handlePause} />
      </Grid>
    </div>
  );
}
