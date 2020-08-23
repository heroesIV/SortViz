import React, { useState, createContext } from "react";

export const DataContext = createContext();

export function DataProvider(props) {
  const [length, setLength] = useState(10);
  const [array, setArray] = useState([]);
  const [ogArray, setOgArray] = useState([]);

  return (
    <DataContext.Provider
      value={[length, setLength, array, setArray, ogArray, setOgArray]}
    >
      {props.children}
    </DataContext.Provider>
  );
}
