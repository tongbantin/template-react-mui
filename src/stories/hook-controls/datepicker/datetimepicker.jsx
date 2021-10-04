import "date-fns";
import React from "react";
import { useFormContext } from "react-hook-form";

import DateFnsUtils from "@date-io/date-fns";
import { useMaterialDate } from "./useMaterialDate";
import { dateTimeMuiformat } from "../../../utils/date";
import {
  MuiPickersUtilsProvider,
  KeyboardDateTimePicker,
} from "@material-ui/pickers";
export function MaterialUIDateTimePickers(props) {
  const { name, onChange = () => {},inputVariant="outlined" } = props;
  const methods = useFormContext();
  const { errors } = methods;
  const { handleDateTimeChange, values } = useMaterialDate(name);
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <KeyboardDateTimePicker
          {...props}
          autoOk
          ampm={false}
          size="small"
          style={{height:"39px"}}
          inputVariant={inputVariant}
          format={ dateTimeMuiformat }
          value={values}
          onChange={(e)=>{
            handleDateTimeChange(e)
            onChange(e)
          }}
          KeyboardButtonProps={{
            "aria-label": "change date",
          }}
          error={errors.hasOwnProperty(name)}
          helperText={errors[name] && errors[name].message}
        />
    </MuiPickersUtilsProvider>
  );
}
