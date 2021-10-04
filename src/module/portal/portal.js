import React, { useEffect, useContext } from "react";

import { Link as RouterLink } from "react-router-dom";
//css
import "./portal.css";
//Material
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import LinearProgress from "@material-ui/core/LinearProgress";
import Grid from "@material-ui/core/Grid";

import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";

import CardContent from "@material-ui/core/CardContent";

//Component
import { Banner } from "./../../stories/banner";

//function

//store
import { MenuContext } from "./menu-context";
import {
  LoadingContext,
  withLoadingContext,
} from "../../context/loading-context";
function VersionInfo() {
  const info = process.env.REACT_APP_DTAC_BMW_VERSION;
  if (!info) {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {"Operation Portal."}
      </Typography>
    );
  }
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Operation Portal v"}
      {info}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  imageWrapper: {
    height: 200,
    position: "relative",
    width: "100%",
  },
  image: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 12,
    overflow: "hidden",
  },
  media: {
    height: 140,
  },

  menuContainer: {
    paddingTop: theme.spacing(5),
  },
  cardMenu: {
    display: "flex",
    alignItems: "center",
  },
  avatar: {
    marginLeft: "16px",
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
}));
export const Portal = () => {
  const { MenuList, GetMenuList } = React.useContext(MenuContext);
  const { actions: load_actions, state: load_state } = useContext(
    LoadingContext
  );
  const classes = useStyles();
  useEffect(() => {
    (async () => {
      await GetMenuList();
      load_actions.setisLoading(false);
    })();
  }, [GetMenuList,load_actions]);
  return (
    <>
      {load_state?.isLoading ? (
        <Box className={classes.loader}>
          <LinearProgress className={classes.loader} />
        </Box>
      ) : null}
      <Container
        maxWidth="lg"
        className={classes.menuContainer}
        style={{ paddingTop: "10" }}
      >
        <div>
          {MenuList?.map((grp) => (
            <Box
              display="flex"
              key={grp.Group}
              flexGrow={1}
              flexDirection="column"
              mt={2}
              mb={5}
            >
              <Box className="dashBoardMenuHeadGroup">{grp.Group}</Box>
              {/* <Box display="flex" flexWrap="Wrap"> */}
              <Grid
                container
                spacing={2}
                alignItems="center"
                style={{ padding: "0 20px" }}
              >
                {grp?.Modules.map((el) => (
                  <Grid
                    item
                    xs={12}
                    md={6}
                    lg={4}
                    key={el.MODULE_NAME}
                    className="dashBoardGridMenu"
                  >
                    {/* <Box flexBasis="350px" m={1} key={el.MODULE_NAME}> */}
                    <Card
                      className={classes.cardMenu}
                      style={{ height: "120" }}
                    >
                      <CardActionArea
                        component={RouterLink}
                        to={el.path || "/"}
                        style={{ textDecoration: "none", height: "120" }}
                      >
                        <div
                          className={classes.cardMenu}
                          style={{ height: "100%", alignItems: "initial" }}
                        >
                          <Avatar
                            className={classes.avatar}
                            style={{ marginTop: "20px" }}
                          ></Avatar>
                          {/* <div style={{height:"100%",alignItems:"center",display:"flex"}}>
                            <Avatar className={classes.avatar}></Avatar>
                          </div> */}
                          <CardContent height="120px">
                            <Typography
                              gutterBottom
                              variant="h5"
                              component="h2"
                            >
                              {el.MODULE_NAME}
                            </Typography>
                            <Typography
                              variant="body2"
                              color="textSecondary"
                              component="p"
                            >
                              {el.MODULE_DESC}
                            </Typography>
                          </CardContent>
                        </div>
                      </CardActionArea>
                    </Card>
                    {/* </Box> */}
                  </Grid>
                ))}
                {/* </Box> */}
              </Grid>
            </Box>
          ))}

          <span style={{ opacity: "0" }}>s</span>
        </div>
      </Container>
      <VersionInfo />
    </>
  );
};
export default withLoadingContext(Portal);
