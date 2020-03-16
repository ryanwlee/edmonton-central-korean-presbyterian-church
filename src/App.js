import React from "react";
import Menu from "./Components/Menu";
import Content from "./Components/Content";
import MenuIcon from "@material-ui/icons/Menu";
import { Drawer, IconButton, AppBar, Toolbar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import HideOnScroll from "./Components/HideOnScroll";
import grey from "@material-ui/core/colors/grey";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    backgroundColor: "white"
  },
  body: {
    display: "flex",
    flexDirection: "column",
    width: "100%"
  },
  menuButton: {
    marginLeft: "5px",
    height: "50px",
    zIndex: 100
  },
  appbar: {
    backgroundColor: "white"
  },
  appbarText: {
    color: grey[700]
  },
  menuIcon: {
    color: grey[700]
  },
  logo: {
    marginLeft: "20px",
    height: "60px"
  }
}));

const initialScreen = {
  current: "header"
};

function screenReducer(state, action) {
  switch (action.type) {
    case "focus":
      return { ...state, current: action.current };
    default:
      return { ...state };
  }
}

function App(props) {
  const [screen, dispatch] = React.useReducer(screenReducer, initialScreen);
  const setScreen = current => {
    dispatch({ type: "focus", current });
  };

  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false
  });

  const toggleDrawer = (side, open) => event => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  return (
    <div className={classes.root}>
      <Drawer open={state.left} onClose={toggleDrawer("left", false)}>
        <Menu current={screen.current} toggleDrawer={toggleDrawer} />
      </Drawer>
      <HideOnScroll>
        <AppBar className={classes.appbar}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={toggleDrawer("left", true)}
              className={classes.menuButton}
            >
              <MenuIcon className={classes.menuIcon} />
            </IconButton>
            <img
              src="https://edmontoncc.net/wp-content/uploads/2020/01/cropped-로고-6-338x82.png"
              className={classes.logo}
              alt="logo"
            />
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <div className={classes.body}>
        <Content setScreen={setScreen} />
      </div>
    </div>
  );
}

export default App;
