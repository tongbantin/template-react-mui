import React from "react";
//Material
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
/**
 * Primary UI component for user interaction
 */
const useStyles = makeStyles((theme) => ({
  Container: {
    paddingTop: theme.spacing(5),
    overflow: "hidden",
  },
}));
export const BaseContainer = ({ children, ...props }) => {
  const classes = useStyles();
  return (
    <div className="baseContainerStyle">
      <Container maxWidth={false} className={classes.Container} name="basecontainer" style={{paddingBottom:"10px"}} >
        <Box minHeight={'90%'}>{children}</Box>
      </Container>
    </div>
  );
};

// Button.propTypes = {
//   /**
//    * Is this the principal call to action on the page?
//    */
//   primary: PropTypes.bool,
//   /**
//    * What background color to use
//    */
//   backgroundColor: PropTypes.string,
//   /**
//    * How large should the button be?
//    */
//   size: PropTypes.oneOf(['small', 'medium', 'large']),
//   /**
//    * Button contents
//    */
//   label: PropTypes.string.isRequired,
//   /**
//    * Optional click handler
//    */
//   onClick: PropTypes.func,
// };

// Button.defaultProps = {
//   backgroundColor: null,
//   primary: false,
//   size: 'medium',
//   onClick: undefined,
// };
export default BaseContainer;
