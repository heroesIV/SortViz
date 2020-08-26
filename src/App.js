import { DataContext } from "./DataContext";
import React, { useContext } from "react";
import SortViz from "./components/SortViz";
import Appbar from "./components/Appbar";
import { lightTheme, darkTheme } from "./Theme";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

function App() {
  const [
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
  ] = useContext(DataContext);
  return (
    <>
      <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
        <CssBaseline />
        <Appbar />
        <SortViz />
      </ThemeProvider>
    </>
  );
}

export default App;
