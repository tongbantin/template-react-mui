import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
const useStyles = makeStyles((theme) => ({
  banner: {
    backgroundImage: ` url(https://www.dtac.co.th/cms-storage/ss-s20/AW-Device-Galaxy-S20-FE-Oct-Banner-Web-Lead.jpg)`, //linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),
    height: "325px",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    display: "flex",
    position: "relative",
    backgroundSize: "cover",
    justifyContent: "center",
    alignItems: "center",
    color: "#fff",
    fontSize: "4rem",
  },
  container: {
    display: "flex",
    maxWidth: "100%",
    justifyContent: "center",
    alignContent: "center",
    padding: 0,
  },
  img: {
    maxWidth: "100%",
    height: "auto",
  },
  desktopimg: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  mbimg: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
}));
export const Banner = () => {
  const classes = useStyles();
  return (
    <>
      <section name="banner">
        <Box display="flex" justifyContent="center">
          <Box>
            <img
            alt=""
              src="https://www.dtac.co.th/cms-storage/best-deal/AW-Device-Campaign-Fixspeed-Sep-Banner-Web-1920x434.jpg"
              className={`${classes.img} ${classes.desktopimg}`}
            />
            <img
             alt=""
              src="https://www.dtac.co.th/cms-storage/best-deal/AW-Device-Campaign-Fixspeed-Sep-Banner-Web-768x560.jpg"
              className={`${classes.img} ${classes.mbimg}`}
            />
          </Box>
        </Box>
      </section>
    </>
  );
};
export default Banner;
