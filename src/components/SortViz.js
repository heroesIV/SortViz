import React from "react";
import Nav from "./Nav";
import Bars from "./Bars";

import BottomAppbar from "./BottomAppbar";

import { Grid } from "@material-ui/core";

export default function SortViz() {
  return (
    <div>
      <Grid container spacing={0}>
        <Nav />
        <Bars />
        <BottomAppbar />
      </Grid>
    </div>
  );
}
