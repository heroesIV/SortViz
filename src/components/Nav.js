import React, { useContext } from "react";
import { Slider, Button } from "@material-ui/core";
import { DataContext } from "../DataContext";
import { getBubbleSortAnimations } from "../sortingAlgorithms/BubbleSort";
// import produce from "immer";

export default function Nav() {
  const [length, setLength, array, setArray] = useContext(DataContext);

  //   const bubbleSort = () => {
  //     const oldArray = [...array];
  //     for (let i = 0; i < length; i++) {
  //       for (let j = 0; j < length - i - 1; j++) {
  //         const ele = document.querySelector(".bar");
  //         console.log(ele);
  //         if (oldArray[j] > oldArray[j + 1]) {
  //           const temp = oldArray[j + 1];
  //           oldArray[j + 1] = oldArray[j];
  //           oldArray[j] = temp;
  //         }
  //       }
  //     }
  //     setArray(oldArray);
  //   };
  const handleBubbleSort = () => {
    const [sortedArray, animations] = getBubbleSortAnimations(array);
    // console.log(animations.length);
    for (let i = 0; i < animations.length; i++) {
      const isColorChange =
        animations[i][0] === "bars" || animations[i][0] === "bar2";
      const arrayBars = document.querySelectorAll(".bar");
      if (isColorChange) {
        const color = animations[i][0] === "bars" ? "yellow" : "turquoise";
        const margin = animations[i][0] === "bars" ? "10px" : "2px";
        const [code, bar1, bar2] = animations[i];
        // console.log(arrayBars, bar1, bar2);

        const bar1Style = arrayBars[bar1].style;
        const bar2Style = arrayBars[bar2].style;
        setTimeout(() => {
          bar1Style.backgroundColor = color;
          bar2Style.backgroundColor = color;
          //   bar1Style.marginLeft = margin;
          //   bar1Style.marginRight = margin;
          //   bar2Style.marginLeft = margin;
          //   bar2Style.marginRight = margin;
          //   console.log("dekh bhai");
        }, i * 100);
      } else {
        const [swap, barIndex, newHeight] = animations[i];
        if (barIndex === -1) {
          continue;
        }
        const color = animations[i][0] === "swap1" ? "red" : "turquoise";
        const margin = animations[i][0] === "swap1" ? "10px" : "2px";
        let bar1Style, bar2Style;
        if (animations[i][0] === "swap1") {
          bar1Style = arrayBars[barIndex].style;
          bar2Style = arrayBars[barIndex + 1].style;
        } else {
          bar1Style = arrayBars[barIndex].style;
          bar2Style = arrayBars[barIndex - 1].style;
        }
        setTimeout(() => {
          bar1Style.backgroundColor = color;
          bar2Style.backgroundColor = color;
          bar1Style.height = `${newHeight}px`;
          //   bar1Style.marginLeft = margin;
          //   bar1Style.marginRight = margin;
          //   bar2Style.marginLeft = margin;
          //   bar2Style.marginRight = margin;
        }, i * 100);
      }
    }
  };
  return (
    <div>
      <h1>Sorting Visualiser</h1>
      <div style={{ width: "30%", margin: "auto" }}>
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
      </div>
    </div>
  );
}
