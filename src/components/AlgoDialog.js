import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import SortIcon from "@material-ui/icons/Sort";
import IconButton from "@material-ui/core/IconButton";
import { blue } from "@material-ui/core/colors";

const algorithms = ["Quick Sort", "Bubble Sort"];

const useStyles = makeStyles((theme) => ({
  avatar: {
    // backgroundColor: theme.palette.primary.light,
    margin: "0 10px 0 10px",
  },
}));

export default function AlgoDialog(props) {
  const classes = useStyles();
  const { onClose, selectedValue, open, setAlgo } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value) => {
    setAlgo(value);
    onClose(value);
  };

  return (
    <Dialog
      onClose={handleClose}
      aria-labelledby="simple-dialog-title"
      open={open}
    >
      <DialogTitle id="simple-dialog-title">Select Algorithm</DialogTitle>
      <List>
        {algorithms.map((algorithm) => (
          <ListItem
            button
            onClick={() => handleListItemClick(algorithm)}
            key={algorithm}
          >
            <IconButton
              className={classes.avatar}
              color="primary"
              aria-label="menu"
            >
              <SortIcon />
            </IconButton>
            <ListItemText primary={algorithm} />
          </ListItem>
        ))}
      </List>
    </Dialog>
  );
}

AlgoDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
  setAlgo: PropTypes.func.isRequired,
};
