import React,{useContext,useEffect} from "react";
import PropTypes from "prop-types";
import { Link as RouterLink } from "react-router-dom";
//Material

import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Fab from "@material-ui/core/Fab";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import Zoom from "@material-ui/core/Zoom";
import PersonIcon from "@material-ui/icons/Person";
import MenuIcon from "@material-ui/icons/Menu";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import IconButton from "@material-ui/core/IconButton";
import { Divider } from "@material-ui/core";
//Function
import { Logout } from "../../utils/sessions";
import { API_URL } from "../../utils/api-utils";
import { isEmptyStr } from "../../utils/common-function";
//Context
import { MenuContext } from "./../../module/portal/menu-context";
const useStyles = makeStyles((theme) => ({
  root: {
    position: "fixed",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
  appbar: {
    backgroundColor: "#fff",
    color: "black",
  },
  toolbar: {
    display: "flex",
    flexDirection: "row",
    //justifyContent: "center",
    //alignSelf: "center",
  },
  grow: {
    flexGrow: 1,
  },
  logo: {},
  name: {},
  icon: {
    marginLeft: theme.spacing(1),
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

export const MuiAppbar2 = ({
  children,
  user,
  ScreenName,
  ScreenList = [],
  helper ,
  ...props
}) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const context = useContext(MenuContext)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  useEffect(() => {
    context.GetHelperList()
  }, [context.HelperList,context])
  let link = context.getHelperLink(helper)
  link = link && `${API_URL.Docs}${link}`;
  const Screenlst = ScreenList?.map((grp) => (
    <div key={grp.Group}>
      <Divider />
      <Box p={1}>
        <Typography p={1} variant="caption">
          {grp.Group}
        </Typography>
      </Box>

      {grp?.Modules.map((el) => (
        <MenuItem
          key={el.ID}
          onClick={handleClose}
          component={RouterLink}
          to={el.path || "/"}
        >
          {el.MODULE_NAME || ""}
        </MenuItem>
      ))}
    </div>
  ));

  return (
    <React.Fragment>
      <header>
        <AppBar className={classes.appbar}>
          <Toolbar className={classes.toolbar}>
            <IconButton onClick={handleClick}>
              <MenuIcon />
            </IconButton>

            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem
                key="home"
                onClick={handleClose}
                component={RouterLink}
                to={"/"}
              >
                Home
              </MenuItem>
              <MenuItem
                key="logout"
                onClick={() => {
                  handleClose();
                  Logout();
                }}
              >
                Logout
              </MenuItem>

              {Screenlst}
            </Menu>
            <Typography>{ScreenName}</Typography>
            <div className={classes.grow} />
            <Typography>{user}</Typography>
            <PersonIcon className={classes.icon} />
            {isEmptyStr(link) ? null : (
              <HelpOutlineIcon
                className={classes.icon}
                onClick={() => window.open(link)}
              />
            )}
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
MuiAppbar2.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  user: PropTypes.string,
};
export default MuiAppbar2;
