import { createMuiTheme } from "@material-ui/core/styles";
import purple from "@material-ui/core/colors/purple";
import green from "@material-ui/core/colors/green";

export const lightTheme = createMuiTheme({
  palette: {
    type: "light",
  },
});

export const darkTheme = createMuiTheme({
  palette: {
    type: "dark",
    primary: green,
    background: {
      default: "#000",
      paper: "#121212",
    },
  },
});
