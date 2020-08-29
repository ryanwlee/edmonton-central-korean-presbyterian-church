import React from "react";
import { CookiesProvider } from "react-cookie";
import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";
import Menu from "./Components/Menu";
import Content from "./Components/Content";
import SermonPage from "./Components/SermonPage";
import JuboPage from "./Components/JuboPage";
import DonationPage from "./Components/DonationPage";
import Appmenu from "./Components/Appmenu";
import MenuIcon from "@material-ui/icons/Menu";
import { Drawer, IconButton, AppBar, Toolbar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import HideOnScroll from "./Components/HideOnScroll";
import grey from "@material-ui/core/colors/grey";
import Logo from "./Components/img/logo.png";

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        backgroundColor: "white",
    },
    body: {
        display: "flex",
        flexDirection: "column",
        width: "100%",
    },
    menuButton: {
        marginLeft: "5px",
        height: "50px",
        zIndex: 100,
    },
    appbar: {
        backgroundColor: "white",
    },
    appbarText: {
        color: grey[700],
    },
    menuIcon: {
        color: grey[700],
    },
    logo: {
        display: "none",
        [theme.breakpoints.down("xs")]: {
            display: "block",
            marginLeft: "20px",
            height: "60px",
        },
    },
}));

const initialScreen = {
    current: "header",
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
    const setScreen = (current) => {
        dispatch({ type: "focus", current });
    };

    const classes = useStyles();
    const [state, setState] = React.useState({
        left: false,
    });

    const toggleDrawer = (side, open) => (event) => {
        if (event && event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
            return;
        }

        setState({ ...state, [side]: open });
    };

    return (
        <Router>
            <CookiesProvider>
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
                                <Link to={"/"}>
                                    <img src={Logo} className={classes.logo} alt={"logo"} />
                                </Link>
                                <Appmenu />
                            </Toolbar>
                        </AppBar>
                    </HideOnScroll>
                    <div className={classes.body}>
                        <Switch>
                            <Route path="/sermon">
                                <SermonPage />
                            </Route>
                            <Route path="/news">
                                <JuboPage />
                            </Route>
                            <Route path="/donation">
                                <DonationPage />
                            </Route>
                            <Route path="/">
                                <Content setScreen={setScreen} />
                            </Route>
                        </Switch>
                    </div>
                </div>
            </CookiesProvider>
        </Router>
    );
}

export default App;
