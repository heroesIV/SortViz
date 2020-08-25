import React from "react";
import SortViz from "./components/SortViz";
import Appbar from "./components/Appbar";
import { DataProvider } from "./DataContext";

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
