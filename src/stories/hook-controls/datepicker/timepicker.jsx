import "date-fns";
import React from "react";
import { useFormContext } from "react-hook-form";
import DateFnsUtils from "@date-io/date-fns";
import { useMaterialDate } from "./useMaterialDate";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
} from "@material-ui/pickers";
export function MaterialUITimePickers(props) {
  const { name, onChange = () => {}, inputVariant = "outlined" } = props;
  const methods = useFormContext();
  const { errors } = methods;
  const { handleDateTimeChange, values } = useMaterialDate(name);
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <KeyboardTimePicker
        {...props}
        autoOk
        ampm={false}
        inputVariant={inputVariant}
        mask="__:__"
        size="small"
          style={{height:"39px"}}
        value={values}
        onChange={(e) => {
          handleDateTimeChange(e);
          onChange(e);
        }}
        error={errors.hasOwnProperty(name)}
        helperText={errors[name] && errors[name].message}
        KeyboardButtonProps={{
          "aria-label": "change date",
        }}
      />
    </MuiPickersUtilsProvider>
  );
}
