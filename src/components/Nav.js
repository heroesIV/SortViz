import React, { useContext, useRef, useState, useEffect } from "react";
import { Slider, Button } from "@material-ui/core";
import { DataContext } from "../DataContext";
import { getBubbleSortAnimations } from "../sortingAlgorithms/BubbleSort";
import { getQuickSortAnimations } from "../sortingAlgorithms/QuickSort";
// import produce from "immer";

const primary_color = "turquoise";
const comp_color = "yellow";
const swap_color = "red";

export default function Nav() {
  const [length, setLength, array, setArray, speed, setSpeed] = useContext(
    DataContext
  );

  // const handleQuickSort = () => {
  //   const [sortedArray, animations] = getQuickSortAnimations(array);
  //   const arrayBars = document.querySelectorAll(".bar");
  //   for (let i = 0; i < animations.length; i++) {
  //     const isSelect =
  //       animations[i][0] === "select" || animations[i][0] === "deselect";
  //     if (isSelect) {
  //       const color =
  //         animations[i][0] === "select" ? comp_color : primary_color;
  //       const [code, bar1, bar2] = animations[i];
  //       const bar1Style = arrayBars[bar1].style;
  //       const bar2Style = arrayBars[bar2].style;
  //       setTimeout(() => {
  //         bar1Style.backgroundColor = color;
  //         bar2Style.backgroundColor = color;
  //       }, i * (500 / speed));
  //     } else if (animations[i][0] === "sorted") {
  //       const bar = animations[i][1];
  //       const barStyle = arrayBars[bar].style;
  //       barStyle.backgroundColor = "green";
  //     } else {
  //       const [swap, bar1Index, bar2Index, newHeight, oldHeight] = animations[
  //         i
  //       ];
  //       if (bar1Index === -1 || bar2Index === -1) {
  //         continue;
  //       }
  //       const color = animations[i][0] === "swap" ? swap_color : primary_color;

  //       const bar1Style = arrayBars[bar1Index].style;
  //       const bar2Style = arrayBars[bar2Index].style;
  //       setTimeout(() => {
  //         bar1Style.backgroundColor = color;
  //         bar2Style.backgroundColor = color;
  //         bar1Style.height = `${newHeight}px`;
  //         bar2Style.height = `${oldHeight}px`;
  //       }, i * (500 / speed));
  //     }
  //   }
  //   console.log(sortedArray);
  // };

  const handleBubbleSort = () => {
    const [sortedArray, animations] = getBubbleSortAnimations(array);
    // console.log(animations.length);
    for (let i = 0; i < animations.length; i++) {
      const isColorChange =
        animations[i][0] === "bar1" || animations[i][0] === "bar2";
      const arrayBars = document.querySelectorAll(".bar");
      if (isColorChange) {
        const color = animations[i][0] === "bar1" ? comp_color : primary_color;

        const [code, bar1, bar2] = animations[i];
        // console.log(arrayBars, bar1, bar2);

        const bar1Style = arrayBars[bar1].style;
        const bar2Style = arrayBars[bar2].style;
        // console.log(speed);
        setTimeout(() => {
          bar1Style.backgroundColor = color;
          bar2Style.backgroundColor = color;
        }, i * (500 / speed));
      } else {
        const [swap, barIndex, newHeight, oldHeight] = animations[i];
        if (barIndex === -1) {
          continue;
        }
        const color = animations[i][0] === "swap1" ? swap_color : primary_color;

        let bar1Style, bar2Style;
        if (animations[i][0] === "swap1") {
          bar1Style = arrayBars[barIndex].style;
          bar2Style = arrayBars[barIndex + 1].style;
          setTimeout(() => {
            bar1Style.backgroundColor = color;
            bar2Style.backgroundColor = color;
            bar1Style.height = `${newHeight}px`;
            bar2Style.height = `${oldHeight}px`;
          }, i * (500 / speed));
        } else {
          bar1Style = arrayBars[barIndex].style;
          bar2Style = arrayBars[barIndex - 1].style;
          setTimeout(() => {
            bar1Style.backgroundColor = color;
            bar2Style.backgroundColor = color;
          }, i * (500 / speed));
        }
      }
    }
  };
  const [running, setRunning] = useState(false);
  const runningRef = useRef(running);
  runningRef.current = running;

  const pauseButton = () => {
    setRunning(!running);
  };

  function handleQuickSort() {
    setRunning(true);

    const [sortedArray, animations] = getQuickSortAnimations(array);
    console.log(animations);

    const intervalId = setInterval(() => {
      handleAnimation(animations.shift(), intervalId);
    }, 200);

    // handleAnimation(animations.shift());
    // handleAnimation(animations.shift());
    // handleAnimation(animations.shift());
    // handleAnimation(animations.shift());
  }

  const handleAnimation = (animation, intervalId) => {
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
    console.log(code, idx1, idx2, oldHeight, newHeight);

    if (code === "pivot") {
      const pivotIndex = idx1;
      const barStyle = arrayBars[pivotIndex].style;
      barStyle.backgroundColor = "blue";
      console.log(code);
      for (let i = 0; i < pivotIndex; i++) {
        const barStyle = arrayBars[i].style;
        barStyle.backgroundColor = "lightgreen";
      }
    }
    if (code === "select") {
      const selectIndex = idx1;
      const barStyle = arrayBars[selectIndex].style;
      barStyle.backgroundColor = "yellow";
      console.log(code);
    }
    if (code === "deselect") {
      const selectIndex = idx1;
      const barStyle = arrayBars[selectIndex].style;
      barStyle.backgroundColor = "turquoise";
      console.log(code);
    }
    if (code === "smaller") {
      const selectIndex = idx1;
      const barStyle = arrayBars[selectIndex].style;
      barStyle.backgroundColor = "pink";
      console.log(code);
    }
    if (code === "swap1") {
      const bar1Style = arrayBars[idx1].style;
      const bar2Style = arrayBars[idx2].style;
      bar1Style.height = `${newHeight}px`;
      bar2Style.height = `${oldHeight}px`;
      bar1Style.backgroundColor = "pink";
      bar2Style.backgroundColor = "turquoise";
      console.log(code);
    }
    if (code === "swap2") {
      const bar1Style = arrayBars[idx1].style;
      const bar2Style = arrayBars[idx2].style;
      bar1Style.height = `${newHeight}px`;
      bar2Style.height = `${oldHeight}px`;
      for (let i = 0; i < arrayBars.length; i++) {
        const barStyle = arrayBars[i].style;
        barStyle.backgroundColor = "turquoise";
      }
      bar1Style.backgroundColor = "lightgreen";
      console.log(code);
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
