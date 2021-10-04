import React from "react";
import { useFormContext, Controller } from "react-hook-form";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from "@material-ui/core/FormHelperText";
import styled from "styled-components";

export const StyledInputLabel = styled(InputLabel)`
  && {
    .req-label {
      color: #f44336;
    }
  }
`;

const MuiSelect = React.forwardRef((props,ref) => {
  const { errors } = useFormContext();
  const { label, name, options, required, errorobj = errors,fullWidth=true } = props;
  let isError = false;
  let errorMessage = "";
  if (errorobj && errorobj.hasOwnProperty(name)) {
    isError = true;
    errorMessage = errorobj[name].message;
  }

  return (
  
    <FormControl fullWidth={fullWidth} error={isError} className="dropDownStyle" size="small" >
       <StyledInputLabel htmlFor={name}>
        {label} {required ? <span className="req-label">*</span> : null}
      </StyledInputLabel>
      <Select id={name} {...props} variant ="outlined" style={{height:"39px"}}>
        {options&&options.map((item) => (
          <MenuItem key={item.id} value={item.id} disabled={item.disabled}>
            {item.label}
          </MenuItem>
        ))}
      </Select>
      <FormHelperText>{errorMessage}</FormHelperText>
    </FormControl>
  );
});

function FormSelect(props) {
  const { control } = useFormContext();
  //const { name, label,...otherprops } = props;
  // const v2 = (
  //   <React.Fragment>
  //     <Controller
  //     control={control}
  //      defaultValue=""
  //        render={(uiprops) =>
  //         <MuiSelect
  //           {...uiprops}
  //           {...props}
  //         />
  //       }
  //       {...props}
  //     />
  //   </React.Fragment>
  // );
  const v3 = (
    <Controller
      control={control}
      defaultValue=""
      {...props}
      render={(uiprops) => (
        <MuiSelect
          {...uiprops}
          {...props}
          
          
        
        />
      )}
     
    />
  );
  return v3
    
}

export default FormSelect;
