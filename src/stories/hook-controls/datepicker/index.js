import React from "react";
import { useFormContext, Controller, useController } from "react-hook-form";
import Grid from "@material-ui/core/Grid";
import MomentUtils from "@date-io/moment";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import { KeyboardTimePicker, KeyboardDatePicker } from "@material-ui/pickers";
import TextField from "@material-ui/core/TextField";
import DateFnsUtils from "@date-io/date-fns";
const MuiDatePicker = (props) => {
  const { name, required, errorobj } = props;
  let isError = false;
  let errorMessage = "";
  if (errorobj && errorobj.hasOwnProperty(name)) {
    isError = true;
    errorMessage = errorobj[name].message;
  }
  return (
    <React.Fragment>
      <TextField
        variant="outlined"
        type="date"
        defaultValue=""
        InputLabelProps={{
          shrink: true,
        }}
        error={isError}
        helperText={errorMessage}
        fullWidth
        {...props}
      />
    </React.Fragment>
  );
};

// function FormDatePicker(props) {
//   const { control } = useFormContext();
//   const { name, label } = props;

//   return (
//     <React.Fragment>
//       <MuiPickersUtilsProvider utils={MomentUtils}>
//         <Controller
//           as={MuiDatePicker}
//           name={name}
//           control={control}
//           label={label}
//           defaultValue={null}
//           {...props}
//         />
//       </MuiPickersUtilsProvider>
//     </React.Fragment>
//   );
// }
export function FormTimePicker(props) {
  const { control, register } = useFormContext();
  const { name, label,errorobj } = props;
  let isError = false;
  let errorMessage = "";
  if (errorobj && errorobj.hasOwnProperty(name)) {
    isError = true;
    errorMessage = errorobj[name].message;
  }
  const v1 = (
    <KeyboardTimePicker
      margin="normal"
      id="time-picker"
      label="Time picker"
      inputRef={register}
      KeyboardButtonProps={{
        "aria-label": "change time",
      }}
    />
  );
  const v2 = (
    <TextField
      type="time"
      defaultValue=""
      inputRef={register}
      InputLabelProps={{
        shrink: true,
      }}
      {...props}
      error={isError}
      helperText={errorMessage}
      inputProps={{
        step: 300, // 5 min
      }}
    />
  );
  return (
    <React.Fragment>
      <MuiPickersUtilsProvider utils={MomentUtils}>
        {v2}
      </MuiPickersUtilsProvider>
    </React.Fragment>
  );
}
export function FormDateTimePicker(props) {
  const { control, register } = useFormContext();
  const v1 = (
    <KeyboardTimePicker
      margin="normal"
      id="time-picker"
      label="Time picker"
      inputRef={register}
      KeyboardButtonProps={{
        "aria-label": "change time",
      }}
    />
  );
  const v2 = (
    <TextField
      type="datetime-local"
      defaultValue=""
      inputRef={register}
      InputLabelProps={{
        shrink: true,
      }}
      {...props}
      inputProps={{
        step: 300, // 5 min
      }}
    />
  );
  return (
    <React.Fragment>
      <MuiPickersUtilsProvider utils={MomentUtils}>
        {v2}
      </MuiPickersUtilsProvider>
    </React.Fragment>
  );
}
export function FormDatePicker(props) {
  const { control, register } = useFormContext();
  const v1 = (
    <KeyboardTimePicker
      margin="normal"
      id="time-picker"
      label="Time picker"
      inputRef={register}
      KeyboardButtonProps={{
        "aria-label": "change time",
      }}
    />
  );
  const v3 = (
    <>
      <Controller
        control={control}
        defaultValue=""
        {...props}
        render={(uiprops) => (
          <TextField
            type="date"
            {...uiprops}
            {...props}
            fullWidth={true}
            variant="outlined"
            InputLabelProps={{
              shrink: true,
            }}
          />
        )}
      />
    </>
  );

  return v3;
}
function InputDate({ control, name }) {
  const {
    field: { ref, ...inputProps },
  } = useController({
    name,
    control,
    rules: { required: true },
    defaultValue: "",
  });

  return (
    <TextField {...inputProps} inputRef={ref} type="date" variant="outlined" />
  );
}
export default FormDatePicker;
