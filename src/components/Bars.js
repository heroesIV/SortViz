import React, { useContext, useEffect } from "react";
import { DataContext } from "../DataContext";

export default function Bars() {
  const [length, setLength, array, setArray, ogArray, setOgArray] = useContext(
    DataContext
  );
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
    <>
      <div
        className="array-container"
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "flex-end",
          height: "420px",
          width: "90%",
          margin: "auto",
          // marginTop: "2%",
        }}
      >
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
      </div>
    </>
  );
}
