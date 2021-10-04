import React from "react";
import logo from "./../../assets/Dtac.png";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Fab from "@material-ui/core/Fab";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import Zoom from "@material-ui/core/Zoom";
import PersonIcon from "@material-ui/icons/Person";
//Function
import { Logout } from "../../utils/sessions";
const useStyles = makeStyles((theme) => ({
  root: {
    position: "fixed",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
  appbar: {
    backgroundColor: "#fff",
    color:"black"
  },
  toolbar: {
    display: "flex",
    flexDirection:"row",
    //justifyContent: "center",
    //alignSelf: "center",
  },
  grow: {
    flexGrow: 1,
  },
  logo: {},
  name: {},
  icon: {
    marginLeft:theme.spacing(1),
    //marginBottom:theme.spacing(1)
  },
}));

function ScrollTop(props) {
  const { children, window } = props;
  const classes = useStyles();
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      "#back-to-top-anchor"
    );

    if (anchor) {
      anchor.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <Zoom in={trigger}>
      <div onClick={handleClick} role="presentation" className={classes.root}>
        {children}
      </div>
    </Zoom>
  );
}

ScrollTop.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export const MuiHeader = ({ children,user, ...props }) => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <header>
        <AppBar className={classes.appbar}>
          <Toolbar className={classes.toolbar}>
            <img src={logo} height="50" alt="" />
            <div className={classes.grow} />
            <Typography >
              {user}
            </Typography>
            <PersonIcon className={classes.icon}  />
          </Toolbar>
        </AppBar>
        <Toolbar id="back-to-top-anchor" />
      </header>
      {children}
      <section name="goTop">
        <ScrollTop {...props}>
          <Fab color="secondary" size="small" aria-label="scroll back to top">
            <KeyboardArrowUpIcon />
          </Fab>
        </ScrollTop>
      </section>
    </React.Fragment>
  );
};
MuiHeader.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  user : PropTypes.string

};
export default MuiHeader;
