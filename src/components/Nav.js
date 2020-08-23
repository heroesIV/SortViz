import React, { useContext, useRef, useState, useEffect } from "react";
import { Slider, Button } from "@material-ui/core";
import { DataContext } from "../DataContext";
import { getBubbleSortAnimations } from "../sortingAlgorithms/BubbleSort";
import { getQuickSortAnimations } from "../sortingAlgorithms/QuickSort";

const primary_color = "turquoise";
const comp_color = "yellow";
const swap_color = "red";

export default function Nav() {
  const [length, setLength, array, setArray, speed, setSpeed] = useContext(
    DataContext
  );

  const [running, setRunning] = useState(false);
  const runningRef = useRef(running);
  runningRef.current = running;

  const pauseButton = () => {
    setRunning(!running);
  };

  const handleBubbleSort = () => {
    setRunning(true);

    const [sortedArray, animations] = getBubbleSortAnimations(array);
    console.log(animations);
    let sorted = [];

    const intervalId = setInterval(() => {
      handleAnimation(animations.shift(), intervalId, sorted);
    }, 1000 / speed);
  };

  const handleQuickSort = () => {
    setRunning(true);

    const [sortedArray, animations] = getQuickSortAnimations(array);
    console.log(animations);
    let sorted = [];

    const intervalId = setInterval(() => {
      handleAnimation(animations.shift(), intervalId, sorted);
    }, 1000 / speed);
  };

  const handleAnimation = (animation, intervalId, sorted) => {
    if (!runningRef.current) return;
    const arrayBars = document.querySelectorAll(".bar");
    if (animation === undefined) {
      clearInterval(intervalId);
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
        barStyle.backgroundColor = "turquoise";
      }
      barStyle.backgroundColor = "turquoise";
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
      bar2Style.backgroundColor = "turquoise";
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
          barStyle.backgroundColor = "turquoise";
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
        bar1Style.backgroundColor = "turquoise";
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
      <h1>Sorting Visualiser</h1>
      <div
        style={{
          width: "30%",
          margin: "auto",
          display: "flex",
        }}
      >
        <Slider
          value={length}
          onChange={(e, newValue) => {
            e.preventDefault();
            setLength(newValue);
          }}
          aria-labelledby="continuous-slider"
          min={2}
          max={80}
          valueLabelDisplay="auto"
          style={{ margin: "0 10px 0 10px" }}
        />

        <Slider
          value={speed}
          onChange={(e, newValue) => {
            e.preventDefault();
            setSpeed(newValue);
          }}
          aria-labelledby="continuous-slider"
          min={2}
          max={100}
          valueLabelDisplay="auto"
          style={{ margin: "0 10px 0 10px" }}
        />
      </div>
      <div
        style={{
          width: "90%",
          margin: "auto",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Button
          onClick={handleQuickSort}
          style={{ color: "white", fontWeight: "bold" }}
        >
          Quick Sort
        </Button>
        <Button
          onClick={handleBubbleSort}
          style={{ color: "white", fontWeight: "bold" }}
        >
          Bubble Sort
        </Button>
        <Button
          onClick={pauseButton}
          style={{ color: "white", fontWeight: "bold" }}
        >
          {running ? "PAUSE" : "PLAY"}
        </Button>
      </div>
    </div>
  );
}
