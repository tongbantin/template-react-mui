import React, { useState } from "react";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Box from "@material-ui/core/Box";
export function useEnablesignal() {
  const [isChecked, setisChecked] = useState(false);
  const component = (fn = () => {}) => {
    return (
      <Box style={{height: "29px",width: "115px", padding: "0 16px"}}>
        <FormControlLabel
          control={
            <Checkbox
              checked={isChecked}
              onChange={(e) => {
                setisChecked(e.target.checked);
                fn();
              }}
              name="checkedB"
              color="primary"
            />
          }
          label="Freeze"
        />
      </Box>
    );
  };
  return {
    component,
    isChecked,
  };
}
