import React from "react";
//Material
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import { Divider } from "@material-ui/core";

export const BoxTemplate1=({ children, title,height, add ,onClickAdd=()=>{}}) =>{
  return (
    <>
      <Paper elevation={3} p={1} m={1} style={{height:height,overflowY:"auto"}}  >
        <Box p={1} >
          <Box display="flex" flexDirection="row" p={1} style={{height:"40px"}}>
            {title}
            <Box flexGrow={1}></Box>
            {add ? <AddCircleOutlineIcon onClick={onClickAdd}/> : null}
          </Box>
          <Box p={1}>
            <Divider />
          </Box>
            {children}
        </Box>
      </Paper>
    </>
  );
}

export default BoxTemplate1;
