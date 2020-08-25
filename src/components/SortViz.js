import React from "react";
import Nav from "./Nav";
import Bars from "./Bars";

import { Grid } from "@material-ui/core";

export default function SortViz() {
  return (
    <div>
      <Grid container>
        <Nav />
        <Bars />
      </Grid>
    </div>
  );
}
