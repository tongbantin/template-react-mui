import React from "react";
import { useFormContext } from "react-hook-form";
import FormControlLabel from "@material-ui/core/FormControlLabel";


// const MuiCheckbox = (props) => {
//   const { label, name } = props;
//   return (
//     <FormControlLabel
//       control={<Checkbox name={name} {...props} />}
//       label={label}
//     />
//   );
// };

function FormCheckBox(props) {
  const { register } = useFormContext();
  const {  label } = props;
  return (
    <React.Fragment>
      <FormControlLabel
          control={
            <input type="checkbox"  color="primary" ref={register} {...props} style={{marginRight:"5px"}}/>
          }
          label={label}
        />
    </React.Fragment>
  );
}

export default FormCheckBox;
