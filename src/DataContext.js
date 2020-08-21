import React, { useState, createContext } from "react";

export const DataContext = createContext();

export function DataProvider(props) {
  const [length, setLength] = useState(10);
  const [array, setArray] = useState([]);
  const [speed, setSpeed] = useState(10);

  return (
    <DataContext.Provider
      value={[length, setLength, array, setArray, speed, setSpeed]}
    >
      {props.children}
    </DataContext.Provider>
  );
}
