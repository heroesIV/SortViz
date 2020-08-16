import React, { useState } from "react";
import { Slider } from "@material-ui/core";

export default function Bars() {
  const [length, setLength] = useState(10);
  const array = Array.from(Array(length), () =>
    Math.floor(Math.random() * 500)
  );
  //   console.log(array);
  return (
    <>
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
        className="bars"
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "flex-end",
          backgroundColor: "lightgray",
          height: "520px",
          width: "90%",
          margin: "auto",
        }}
      >
        {array.map((height, index) => {
          return (
            <div
              key={index}
              className="bar"
              style={{
                margin: "1px",
                border: "1px solid black",
                width: "20px",
                height: height,
                backgroundColor: "turquoise",
              }}
            ></div>
          );
        })}
      </div>
    </>
  );
}
