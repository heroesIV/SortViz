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

  const [algo, setAlgo] = useState("Select Algorithm");

  const [darkMode, setDarkMode] = useState(true);

  const [algoDetails, setAlgoDetails] = useState({"Select Algorithm" : {name: "Select Algorithm", info: "info"}, "Quick Sort": {name: "Quick Sort", info: "QuickSort is a Divide and Conquer algorithm. It picks an element as pivot and partitions the given array around the picked pivot. There are many different versions of quickSort that pick pivot in different ways."}, "Bubble Sort" : {name: "Bubble Sort", info: "sdsd"}})

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
        algoDetails, 
        setAlgoDetails,
      ]}
    >
      {props.children}
    </DataContext.Provider>
  );
}
