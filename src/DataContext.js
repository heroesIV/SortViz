import React, { useState, createContext } from "react";

export const DataContext = createContext();

export function DataProvider(props) {
  const [length, setLength] = useState(20);
  const [array, setArray] = useState([]);
  const [ogArray, setOgArray] = useState([]);

  const [speed, setSpeed] = useState(50);
  const [running, setRunning] = useState(false);
  const [disable, setDisable] = useState(false);

  const [sorted, setSorted] = useState(false);

  const [algo, setAlgo] = useState("");

  const [darkMode, setDarkMode] = useState(false);

  return (
    <DataContext.Provider
      value={[
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
      ]}
    >
      {props.children}
    </DataContext.Provider>
  );
}
