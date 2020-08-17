import React from "react";
import Nav from "./components/Nav";
import Bars from "./components/Bars";
import { DataProvider } from "./DataContext";

function App() {
  return (
    <div>
      <DataProvider>
        <Nav />
        <Bars />
      </DataProvider>
    </div>
  );
}

export default App;
