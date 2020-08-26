import React, { useContext, useRef, useEffect } from "react";
import { DataContext } from "../DataContext";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

export default function SimpleMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);

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
    disable2,
    setDisable2,
    algo,
    setAlgo,
  ] = useContext(DataContext);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const quickSortItem = () => {
    setAlgo("Quick Sort");
    setAnchorEl(null);
  };
  const bubbleSortItem = () => {
    setAlgo("Bubble Sort");
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  // console.log()

  return (
    <div>
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
        style={{ marginTop: "10px" }}
        color="primary"
      >
        {algo ? algo : "Select Algo"}
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={quickSortItem} value="quickSort">
          Quick Sort
        </MenuItem>
        <MenuItem onClick={bubbleSortItem} value="bubbleSort">
          Bubble Sort
        </MenuItem>
      </Menu>
    </div>
  );
}
