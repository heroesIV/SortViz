import React from "react";
import SortViz from "./components/SortViz";
import Appbar from "./components/Appbar";
import { DataProvider } from "./DataContext";
import { AppBar } from "@material-ui/core";

function App() {
  return (
    <div>
      <DataProvider>
        <Appbar />
        <SortViz />
      </DataProvider>
    </div>
  );
}

export default App;
