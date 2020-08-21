import React, { useContext, useRef, useState } from "react";
import { Slider, Button } from "@material-ui/core";
import { DataContext } from "../DataContext";
import { getBubbleSortAnimations } from "../sortingAlgorithms/BubbleSort";
// import produce from "immer";

const primary_color = "turquoise";
const comp_color = "yellow";
const swap_color = "red";

export default function Nav() {
  const [length, setLength, array, setArray, speed, setSpeed] = useContext(
    DataContext
  );

  const [running, setRunning] = useState(true);
  const runningRef = useRef(running);
  runningRef.current = running;

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
        <Button style={{ color: "white", fontWeight: "bold" }}>
          Quick Sort
        </Button>
        <Button
          onClick={handleBubbleSort}
          style={{ color: "white", fontWeight: "bold" }}
        >
          Bubble Sort
        </Button>
        <Button style={{ color: "white", fontWeight: "bold" }}>
          Merge Sort
        </Button>
        <Button
          onClick={() => {
            setRunning(!running);
          }}
          style={{ color: "white", fontWeight: "bold" }}
        >
          Pause
        </Button>
      </div>
    </div>
  );
}
